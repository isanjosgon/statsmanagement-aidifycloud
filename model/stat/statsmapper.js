// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const Stats = require('./stats');

exports.statsfromjson = function (id,json)
{
  return new Stats(
    id,
    parseInt(json[0]),
    parseInt(json[1]),
    parseInt(json[2]),
    parseInt(json[3])
  );
}
