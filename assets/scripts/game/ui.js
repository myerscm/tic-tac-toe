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
  store.game = data.game
}
const onGetGamesSuccess = function (data) {
  // clear content div, in case something was already there
  $('#usercontent').html('')

  data.games.forEach(game => {
    const gameHTML = (`
      <h4>Game Number: ${game.id}</h4>
      <p>Cells: ${game.cells}</p>
      <p>Over: ${game.over}</p>
      <p>Player X ID: ${game.player_x.id}</p>
      <p>Player X Email: ${game.player_x.email}</p>
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
