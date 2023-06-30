const express = require("express");
const Item = require("../model/item");

exports.findAll = function (req, res) {
  Item.findAll(function (err, item) {
    if (err) res.send(err);
    res.send(item);
  });
};

exports.countItem = function (req, res) {
  Item.countItem(function (err, count) {
    if (err) res.send(err);
    res.send(count);
  });
};

exports.insertItem = function (req, res) {
  const new_item = new Item(req.body.data);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Item.insertItem(new_item, function (err, item) {
      if (err) res.send(err);
      res.json({
        data: item,
      });
    });
  }
};
