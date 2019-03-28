const path = require('path');

module.exports = {
    entry: {
      catalogPictures: "./js/catalogFillRestClthsSection.js",
      advOnHomepage: "./js/AdvBoards/onHomepage.js",
      advOnCatalogAndBag: "./js/AdvBoards/onCatalogAndBag.js",
      advBoard: "./js/AdvBoards/advBoard.js",
      newArrivals: "./js/HomepageNewArrivals.js",
      itemSpecification: "./js/ItemDetails/itemSpecification.js",
      fillItemDetailsPage: "./js/ItemDetails/fillItemDetailsPage.js",
      fillBag: "./js/Bag/fillBag.js",
      renderItemBag: "./js/Bag/renderItemsInBag.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}

// {
//   entry: {
//     'dir1/js/bundle': path.resolve(__dirname, '/apps/dir1/js/main.js'),
//     'dir2/foo' : path.resolve(__dirname, '/apps/dir2/index.js')
//   },
//   output: {
//     path: path.resolve(__dirname, '/apps'),
//     filename: '[name].js'
//   },