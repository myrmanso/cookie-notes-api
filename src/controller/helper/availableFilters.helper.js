
const helperAvailableFilters = (() => {
  const {
    LEVEL,
    MEALS,
    FLAVORS,
    BASED_PLANTS,
    COST,
    COMMEMORATIVE_DATES
  } = require('../../../utils/constants.util');

  return {
    recipes: [
      {
        id: 'level',
        name: 'Nível',
        values: LEVEL
      },
      {
        id: 'meals',
        name: 'Refeições',
        values: MEALS
      },
      {
        id: 'flavor',
        name: 'Sabor',
        values: FLAVORS
      },
      {
        id: 'basedPlants',
        name: 'Vegano',
        values: BASED_PLANTS[0]
      },
      {
        id: 'basedPlants',
        name: 'Vegetariano',
        values: BASED_PLANTS[1]
      },
      {
        id: 'cost',
        name: 'Custo',
        values: COST
      },
      {
        id: 'occasion',
        name: 'Datas comemorativas',
        values: COMMEMORATIVE_DATES
      },
    ]
  }
})()

module.exports = helperAvailableFilters;