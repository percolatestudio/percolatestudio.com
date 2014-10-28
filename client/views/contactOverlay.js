var schema = new SimpleSchema({
  name: { type: String, }
})

Template.contactOverlay.events({
  'submit form': function(event) {
    event.preventDefault();
    
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
});

