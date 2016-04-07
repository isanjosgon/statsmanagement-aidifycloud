// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const redis = require('redis');

class Broker
{
  constructor (config,logger,setstat) {
    this.client_sub = redis.createClient(config.port,config.host);
    this.client_sub.auth(config.auth);
    this.client_pub = redis.createClient(config.port,config.host);
    this.client_pub.auth(config.auth);
	
    this.client_sub.subscribe('SERVICE:STATSMANAGEMENT');
	let self = this;
    this.client_sub.on('message',function (channel,message) {
      let service = channel.split(':')[1];
      if (service == 'STATSMANAGEMENT') {
        if (logger) {
          logger.log('request MESSAGE : ' + message);
        }
		let params = JSON.parse(message);
        setstat.execute(params);
		
		let action = "CLEAN_CACHE";
		let cleanCacheMessage = `${action}:${params.user}`;
		self.client_pub.publish('SERVICE:APIGATEWAY', cleanCacheMessage);
      }
    });
  }
}

module.exports = Broker;
