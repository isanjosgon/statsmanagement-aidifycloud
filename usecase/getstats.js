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
      .fetchAll(params.id)
      .then(function (user) {
        res && res.ok(user);
      })
      .catch(function (err) {
        res && res.ko(err);
      });
  }
}

module.exports = GetStatsUseCase;
