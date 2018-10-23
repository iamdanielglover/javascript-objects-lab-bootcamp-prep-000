var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign({}, object, { [key] : value });
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  delete obj.key;
  return object;
}
