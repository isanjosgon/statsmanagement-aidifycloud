// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

class SetStatUseCase
{
  constructor (repo) {
    this.repo = repo;
  }
  execute (params,res) {
    this.repo
      .increment(params.user, params.stat, params.points)
      .then(function (user) {
        res && res.ok(user);
      })
      .catch(function (err) {
        res && res.ko('Impossible set stats.');
      });
  }
}

module.exports = SetStatUseCase;
