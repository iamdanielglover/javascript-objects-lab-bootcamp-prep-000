var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object,{[key]:value});
}

function updateObjectWithKeyAndValue(object, key, value) {
  newobj = Object.assign({}, object,{[key]:value});
  return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}