// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const config = require('../package.json');
const env = require('node-env-file');
let file = process.env.NODE_ENV || 'dev';
env(__dirname + '/.' + file);

module.exports = {
  environment : process.env.NODE_ENV || 'dev',
  restapi : {
    port : process.env.PORT || 5007,
    name : config.name,
    version : config.version
  },
  messagebroker : {
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    auth : process.env.REDIS_PASSWORD
  },
  cloud : {
    userservice : process.env.USERMANAGEMENT_ADDRESS,
    statsservice : process.env.STATSMANAGEMENT_ADDRESS,
    activityservice : process.env.ACTIVITYMANAGEMENT_ADDRESS,
    githubservice : process.env.GITSERVICE_ADDRESS
  },
  database : {
    host : process.env.REDISTOGO_URL ? require('url').parse(process.env.REDISTOGO_URL).hostname : null,
    port : process.env.REDISTOGO_URL ? require('url').parse(process.env.REDISTOGO_URL).port : null,
    auth : process.env.REDISTOGO_URL ? require('url').parse(process.env.REDISTOGO_URL).auth.split(':')[1] : null
  },
  logging : {
    appenders: [{
      type: 'file',
      filename: 'logs/error.log',
      category: 'error',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/info.log',
      category: 'info',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/debug.log',
      category: 'debug',
      maxLogSize: 20480,
      backups: 10
    }]
  }
}
