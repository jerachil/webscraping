const fs = require("fs");
var $ = jQuery = require('jquery');
$.csv = require('jquery-csv');

const books = []
const sample = './books.csv';

fs.readFile(sample, 'UTF-8', function(err, csv) {
  $.csv.toArrays(csv, {}, function(err, data) {
    books.push(data)
    
  });
});



