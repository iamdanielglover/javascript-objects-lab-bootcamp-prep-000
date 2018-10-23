var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key] : value });
}

function updateObjectWithKeyAndValue(targetObject, updateObject) {
  return Object.assign({}, targetObject, updateObject);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  newObj = Object.assign({}, object);
  delete newObj[key];
}