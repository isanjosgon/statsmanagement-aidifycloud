// Created by Isra San Jose Gonzalez
// @aidify 19/03/2016

'use strict'

const config = require('./config');
const Logger = require('./interface/logger');

const Server = require('./restapi/server');
const Broker = require('./messagebroker/broker');

const StatsMapper = require('./model/stat/statsmapper');
const StatsRepository = require('./model/stat/statsrepository');

const GetStatUseCase = require('./usecase/getstats');
const SetStatUseCase = require('./usecase/setstat');

let logger = new Logger(config.logging);

let statsrepo = new StatsRepository(config.database,StatsMapper);

let getStatUseCase = new GetStatUseCase(statsrepo);
let setStatUseCase = new SetStatUseCase(statsrepo);

new Server(config.restapi,logger,getStatUseCase);
new Broker(config.messagebroker,logger,setStatUseCase);
