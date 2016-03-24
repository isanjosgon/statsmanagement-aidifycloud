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
      .increment(params.userid,params.stat,params.score)
      .then(function (user) {
        res.ok && res.ok(user);
      })
      .catch(function (err) {
        res.ko && res.ko('Impossible set stats.');
      });
  }
}

module.exports = SetStatUseCase;
