'use strict'
const config = require('../config')
const store = require('../store')

const updateGame = (data, turn, isOver) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data,
          value: turn
        },
        over: isOver
      }
    }
  })
}

const createGame = (data) => {
  console.log('create is working')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const index = function (data) {
  console.log('index is working')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  updateGame,
  index
}
