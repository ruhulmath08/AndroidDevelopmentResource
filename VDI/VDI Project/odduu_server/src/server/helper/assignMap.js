var id = '';
/**
 * @function intoMap - Assigning a new object into a existing object.
 * @param {Object} mapValue - {Key : Value} 
 * @param {Object} newValue - This is a newly created object which override the existing one.
 */
exports.intoMap = (mapValue, newValue) => {
  id = newValue._id;
  return Object.assign(mapValue, {[id] : newValue})
}
