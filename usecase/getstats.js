// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

class GetStatsUseCase
{
  constructor (repo) {
    this.repo = repo;
  }
  execute (params,res) {
    this.repo
      .fetchAll(params.userid)
      .then(function (user) {
        res.ok && res.ok(user);
      })
      .catch(function (err) {
        res.ko && res.ko('Impossible get stats.');
      });
  }
}

module.exports = GetStatsUseCase;
