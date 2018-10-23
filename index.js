var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign({}, object, { [key] : value });
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj = object[key]=value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
}
