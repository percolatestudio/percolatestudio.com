// Budget is required unless consulting is the only service selected
var validateBudget = function() {
  var services = this.field('services').value;
  
  if (services && services.length === 1 && services[0] === 'consulting')
    return undefined;
  
  if (this.isSet)
    return undefined;

  return 'required';
}

var schema = new SimpleSchema({
  name: { type: String, max: 1000 },
  email: { type: String, regEx: SimpleSchema.RegEx.Email, max: 1000 },
  about: { type: String, max: 100000 },
  services: { 
    type: [String], 
    allowedValues: ["strategy", "design", "engineering", "consulting"]
  },
  timing: { 
    type: String, 
    allowedValues: ["today", "quarter", "year"] 
  },
  budget: { 
    type: String,
    optional: true,
    allowedValues: ["25k", "50k", "100k", "notsure"],
    custom: validateBudget
  }
});

var ssContext = schema.newContext();

var prepare = function(doc) {
  schema.clean(doc);

  if (doc.services && ! _.isArray(doc.services))
    doc.services = [doc.services];
}

var showBudget = new ReactiveVar(false);
var sending = new ReactiveVar(false);

Template.contactOverlay.helpers({
  errorFor: function(key) {
    return ssContext.keyErrorMessage(key);
  },
  hasError: function(key) {
    return ssContext.keyIsInvalid(key);
  },
  alertClass: function(key) {
    return ssContext.keyIsInvalid(key) && 'alert';
  },
  budgetVisibleClass: function() {
    return showBudget.get() && 'visible';
  },
  aboutAttrs: function() {
    return {
      name: 'about',
      class: ssContext.keyIsInvalid('about') ? 'alert' : '',
      placeholder: "About your company and project",
      title: ssContext.keyErrorMessage('alert')
    };
  },
  disabled: function() {
    return sending.get() ? 'disabled' : '';
  }
});

// Returns a serialized form element as an Object corresponding to the
// document. Pushes fields that have multiple values into an array.
var readForm = function(form) {
  var r = _.reduce($(form).serializeArray(), function(memo, field) {
    var stored = memo[field.name];

    // gather values from fields that share the same name into an array
    if (stored) {
      if (! _.isArray(stored))
        memo[field.name] = [stored];

      memo[field.name].push(field.value);
    } else {
      memo[field.name] = field.value;
    }
    return memo;
  }, {});
  
  return r;
}


Template.contactOverlay.events({
  'submit form': function(event) {
    event.preventDefault();

    var doc = readForm(event.target);
    prepare(doc);

    if (ssContext.validate(doc)) {
      sending.set(true);
      send(doc);
    }
  },
  'change input[name=services]': function(event) {
    var doc = readForm(event.target.form);
    prepare(doc);
    
    if (doc.services && _.without(doc.services, 'consulting').length > 0)
      showBudget.set(true);
    else
      showBudget.set(false);
  }
});

function send(doc) {
  var to = 'us@percolatestudio.com';
  var subject = 'Work with us';
  var body = JSON.stringify(doc);
  
  var data = {
    'key': '-JqlbKb2ZHU7R5NEkCvnKw', // changeme
    'message': {
      'from_email': doc.email,
      'to': [
          {
            'email': to,
            'name': 'Percolate Studio',
            'type': 'to'
          },
          {
            'email': 'zol@percolatestudio.com', // just in case us@ breaks
            'name': 'Zoltan Olah',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': subject,
      'html': body
    }
  };
  
  HTTP.post('https://mandrillapp.com/api/1.0/messages/send.json',
    { data: data },
    function(error, result) {
      sending.set(false);

      if (result && result.statusCode === 200) {
        alert('Thank you. We will contact you shortly');
      } else {
        window.open('mailto:' + to 
          + '?subject=' + subject + ' (mailto)'
          + '&body=' + body);
      }

      Template.layout.closeOverlay();
    });
}