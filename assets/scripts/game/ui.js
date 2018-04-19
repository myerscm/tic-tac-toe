'use strict'
const store = require('../store')

const onCreateGame = function (data) {
  $('#apimsg').html('Game stored!')
  $('#apimsg').css('background-color', 'grey')
  setTimeout(() => {
    $('#apimsg').html('')
  }, 3000
  )
  store.game = data.game
  console.log(store.game)
}
const onPatchSuccess = function (data) {
  console.log('patch is working', data)
  store.game = data.game
}
const onGetGamesSuccess = function (data) {
  console.table(data.games)

  // clear content div, in case something was already there
  $('#usercontent').html('')

  data.games.forEach(game => {
    const gameHTML = (`
      <h4>id: ${game.id}</h4>
      <p>cells: ${game.cells}</p>
      <p>over: ${game.over}</p>
      <p>playerXid: ${game.player_x.id}</p>
      <p>playerXemail: ${game.player_x.email}</p>
      <br>
    `)

    $('#usercontent').append(gameHTML)
  })
}

module.exports = {
  onCreateGame,
  onGetGamesSuccess,
  onPatchSuccess
}
