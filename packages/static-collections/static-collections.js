// XXX: this is client-side ONLY static collections.
//
// The version in DM is server-side + published with permissions

var SUFFIX = 'static';
var WHERE = 'client';

// this code is lifted from DM -- could probably be better -- JSON?
var parseFrontMatter = function (contents) {
  // parse YAML frontmatter to build meta properties
  var myRegexp = /---([\s\S]*?)---/g;

  var properties = {}, frontMatter;
  if(frontMatter = myRegexp.exec(contents)){
    _.each(frontMatter[0].split('\n'), function(item){
      if (item == "---" || item == "")
        return false;
      var itemArray = item.split(':');
      var key = itemArray[0].trim();
      var property = _.rest(itemArray).join(':').trim();
      // if property is an int, parse it as such
      property = !!parseFloat(property) ? parseFloat(property) : property;
      // if property is a boolean, parse it as such
      property = (property == "true") ? true : property;
      property = (property == "false") ? false : property;
      // strip extra spaces
      property = property[0] == " " ? property.slice(1) : property;
      properties[key] = property;
    });
  }
  properties.text = contents.replace(/---([\s\S]*?)---/g, '');
  
  return properties;
}

var insertDocument = function(compileStep, collectionName, object) {
  var code =  "if (typeof(" + collectionName +") === 'undefined'){\n" + 
    collectionName + " = new Meteor.Collection(null);\n}";
  
  code += "\n" + collectionName + ".insert(" + EJSON.stringify(object) + ")";
  compileStep.addJavaScript({
    data: code,
    path: compileStep.inputPath.replace(SUFFIX, 'js'),
    sourcePath: compileStep.inputPath
  });
}


var handler = function(compileStep) {
  // ---------- Get collection name  ----------
  var pathArray = compileStep.inputPath.split('/');
  var parts = pathArray.slice(-2); // XXX: can we use path.split?
  var collectionName = parts[0];
  var documentName = parts[1];
  collectionName = collectionName[0].toUpperCase() + collectionName.substring(1);
  
  // ---------- Get file contents ----------
  var contents = compileStep.read().toString('utf8');
  var properties = parseFrontMatter(contents);
  
  insertDocument(compileStep, collectionName, _.extend({
    name: documentName.split('.')[0],
  }, properties));
}

Plugin.registerSourceHandler(SUFFIX, handler);
