// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const redis = require('redis');

class StatsRepository
{
  constructor (config,mapper) {
    this.mapper = mapper;
    config.hostname ? this.client = redis.createClient(config.port,config.hostname) : this.client = redis.createClient();
    config.auth && this.client.auth(config.auth);
  }
  fetchAll (userid) {
    const self = this;
    return new Promise(function (resolve,reject) {
      let multi = self.client.multi();
      multi
        .zscore('stat:reputation','user:' + userid)
        .zscore('stat:impact','user:' + userid)
        .zscore('stat:helpful','user:' + userid)
        .zscore('stat:buggy','user:' + userid)
        .exec(function (err,res) {
          if (err) {
            return reject(err);
          }
          resolve(self.mapper.statsfromjson(userid,res));
        });
    });
  }
  incrementStat (userid,stat,score) {
    const self = this;
    return new Promise(function (resolve,reject) {
      self.client.zincrby('stat:' + stat.toLowerCase(),score,'user:' + userid,function (err,res) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = StatsRepository;
