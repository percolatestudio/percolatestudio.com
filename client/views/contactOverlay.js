// Budget is required unless consulting is the only service selected
var validateBudget = function() {
  if (this.field('services').isSet
    && _.without(this.field('services').value, 'consulting').length > 0) {
    return undefined;
  } else {
    return 'required';
  }
}

var schema = new SimpleSchema({
  name: { type: String, min: 3, max: 100 },
  email: { type: String, regEx: SimpleSchema.RegEx.Email },
  about: { type: String, min: 10, max: 10000 },
  services: { type: [String] },
  timing: { type: String },
  budget: { type: String, optional: true, custom: validateBudget }
});

var ssContext = schema.newContext();

Template.contactOverlay.helpers({
  errorFor: function(key) {
    return ssContext.keyErrorMessage(key);
  },
  hasError: function(key) {
    return ssContext.keyIsInvalid(key);
  },
  alertClass: function(key) {
    return ssContext.keyIsInvalid(key) && 'alert';
  }
});

window.readForm = function(form) {
  var r = _.reduce($(form).serializeArray(), function(memo, field) {
    return memo[field.name] = field.value;
    return memo;
  }, {});
  
  return r;
}


Template.contactOverlay.events({
  'submit form': function(event) {
    event.preventDefault();
    
    var doc = {
      name: $(event.target).find('[name=name]').val(),
      email: $(event.target).find('[name=email]').val(),
      about: $(event.target).find('[name=about]').val(),
      services: Template.toggle.gather('Strategy', 'Design', 'Engineering', 'Consulting'),
      timing: Template.toggle.gather('Today', 'This Quarter', 'This Year'),
      budget: Template.toggle.gather('25k–50k', '50k–100k', '+100k', 'Not sure')
    };

    debugger;
    
    // ssContext.validate({services: ['strategy']});
  }
});

function send(form) {
  var to = 'us@percolatestudio.com';
  var subject = 'Work with us';
  var body = 'foobar';
  
  var data = {
    'key': '-JqlbKb2ZHU7R5NEkCvnKw',
    'message': {
      'from_email': 'somelead@nowhere.com',
      'to': [
          {
            'email': to,
            'name': 'Percolate Studio',
            'type': 'to'
          },
          {
            'email': 'zol@percolatestudio.com',
            'name': 'Zoltan Olah',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': body,
      'html': body
    }
  };
  
  HTTP.post('https://ZOLmandrillapp.com/api/1.0/messages/send.json',
    { data: data },
    function(error, result) {
      if (result && result.statusCode === 200) {
        alert('Thank you. We will contact you shortly');
      } else {
        window.open('mailto:' + to 
          + '?subject=' + subject + ' (mailto)'
          + '&body=' + body);
      }
    });
}