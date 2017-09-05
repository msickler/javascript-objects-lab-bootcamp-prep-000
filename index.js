var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]:value })
}

function destructivelyUpdateObjectWithkeyAndValue(object, key, value) {
object [key]=value
return object
}