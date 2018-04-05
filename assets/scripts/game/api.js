'use strict'
const config = require('../config')
const store = require('../store')

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
  index
}
