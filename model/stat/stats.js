// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

class Stats
{
  constructor (reputationScore,impactScore,helpfulScore,buggyScore) {
    this.reputation = reputationScore || 0;
    this.impact = impactScore || 0;
    this.helpful = helpfulScore || 0;
    this.buggy = buggyScore || 0;
    this.total = this.reputation + this.impact + this.helpful + this.buggy;
  }
}

module.exports = Stats;
