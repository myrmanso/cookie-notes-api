const { FLAVORS, LEVEL_FLAVOR } = require('../../../utils/constants.util');

module.exports = {
  flavors: [{
    flavor: { type: String, enum: FLAVORS },
    intensity: { type: Number, enum: LEVEL_FLAVOR }
  }]
}