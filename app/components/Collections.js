"use strict";

var Collections = {
  Products: [
    require("./products/atmosphere"),
    require("./products/campus"),
    require("./products/meetinghero"),
    require("./products/meteor"),
    require("./products/verso")
  ],
  Jobs: [
    require("./jobs/softwareEngineer"),
    require("./jobs/productDesigner"),
    require("./jobs/engineeringIntern"),
    require("./jobs/designIntern")
  ]
};

module.exports = Collections;
