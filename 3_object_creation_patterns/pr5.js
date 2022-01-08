class Item {
  constructor(itemName, category, quantity, skuCode) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.skuCode = skuCode;
  }
}

class ItemManager {
  static items = [];

  static create(itemName, category, quantity) {
    let newItem;

    if (this.validItemName(itemName) && this.validCategory(category) && quantity >= 0) {
      let skuCode = this.generateSKU(itemName, category);
      newItem = new Item(itemName, category, quantity, skuCode);
      this.items.push(newItem);

      return newItem;
    } else {
      return { notValid: true };
    }
  }

  static validItemName(itemName) {
    let onlyLetters = itemName.replace(/[^a-z]gi/);
    return onlyLetters.length >= 5;
  }

  static validCategory(category) {
    let allWords = category.split(' ');
    return allWords.length === 1 && category.length >= 5;
  }

  static generateSKU(itemName, category) {
    let skuCode;
    let allWords = itemName.split(' ');

    if (allWords.length > 1 && allWords[0].length === 2) {
      skuCode = allWords[0].slice(0, 2) + allWords[1][0] + category.slice(0, 2);
    } else {
      skuCode = itemName.slice(0, 3) + category.slice(0, 2);
    }

    return skuCode.toUpperCase();
  }

  static update(code, newValues) {
    let currentObject = this.findItem(code);
    Object.assign(currentObject, newValues);
  }

  static findItem(code) {
    return this.items.filter(currentItem => {
      return currentItem.skuCode === code;
    })[0];
  }

  static inStock() {
    return this.items.filter(currentItem => {
      return currentItem.quantity > 0;
    })
  }

  static itemsInCategory(givenCategory) {
    return this.items.filter(currentItem => {
      return currentItem.category === givenCategory;
    });
  }

  static delete(code) {
    let remainingItems = this.items.filter(currentItem => {
      return currentItem.skuCode !== code;
    });

    this.items = remainingItems;
  }
}

class ReportManager {
  static items;

  static init(itemManager) {
    this.items = itemManager;
  }

  static reportInStock() {
    let itemsInStock = this.items.items.filter(currentItem => {
      return currentItem.quantity > 0;
    });

    itemsInStock = itemsInStock.map(currentItem => currentItem.itemName);
    console.log(itemsInStock.join(', '));
  }

  static createReporter(code) {
    let prototypeObj = ItemManager.findItem(code);
    let reporterObj = Object.create(prototypeObj);

    reporterObj.itemInfo = function() {
      console.log(`skuCode: ${this.skuCode}`);
      console.log(`itemName: ${this.itemName}`);
      console.log(`category: ${this.category}`);
      console.log(`quantity: ${this.quantity}`);
    }

    return reporterObj;
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// logs football,kitchen pot
// console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
console.log(kitchenPotReporter.itemName);
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10

