// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

class Stats
{
  constructor (id,reputationScore,impactScore,helpfulScore,buggyScore) {
    this.userid = id;
    this.stats = {
      reputation : reputationScore,
      impact : impactScore,
      helpful : helpfulScore,
      buggy : buggyScore
    };
    this.totalPoints = reputationScore + impactScore + helpfulScore + buggyScore;
  }
}

module.exports = Stats;
