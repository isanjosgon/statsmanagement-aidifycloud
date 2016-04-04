// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const redis = require('redis');

class Broker
{
  constructor (config,logger,setstat) {
    if (config.host) {
      this.client = redis.createClient(config.port,config.host);
      this.client.auth(config.auth);
    } else {
      this.client = redis.createClient();
    }
    this.client.subscribe('SERVICE:STATSMANAGEMENT');
    this.client.on('message',function (channel,message) {
      let service = channel.split(':')[1];
      if (service == 'STATSMANAGEMENT') {
        if (logger) {
          logger.log('request MESSAGE : ' + message);
        }
        setstat.execute(JSON.parse(message));
      }
    });
  }
}

module.exports = Broker;
