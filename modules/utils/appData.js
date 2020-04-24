module.exports = {
  limit: '10MB',
  sheets:
  {
    sheetName1: 'Menu Details',
    sheetName2: 'Addons Details',
  },
  itemMinPrice: 1,
  itemMaxPrice: 10000,
  packingMaxPrice: 1000,
  gstExpression: '^(0|5|18)$',
  weightMin: 0,
  weightMax: 10000,
  weightUnitExpression: '^(gms|ml)$',
  imageExpression: '^[a-zA-Z0-9_-]+$',
  // categoryExpression: '^[a-zA-Z]{3,30}$',
  // subCategoryExpression: '^[a-zA-Z]{3,30}$',
  ribbonMinLength: 3,
  ribbonMaxLength: 15,
  ribbonMaxLimit: 15,
  itemNameMinLength: 3,
  itemNameMaxLength: 80,
  itemDescriptionMaxLenght: 350,
  itemCategoryMinLength: 3,
  itemCategoryMaxLength: 30,
  itemSubCategoryMinLength: 3,
  itemSubCategoryMaxLength: 30,
  kissurcups: {
    itemMinPrice: 1,
    itemMaxPrice: 1000000,
  },
};