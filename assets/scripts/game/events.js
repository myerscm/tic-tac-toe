const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const player1 = 'X'
const player2 = 'O'
let board = ['', '', '', '', '', '', '', '', '']
let turn = ''
let isOver = false
const dataPatch = function (data) {
  // event.preventDefault()
  // const data = event.target.attr('data-space')
  // const turn = event.target.innerText
  const isOver = winCondition()
  api.updateGame(data, turn, isOver)
    .then(ui.onPatchSuccess)
    .catch()
}
const newGame = function (event) {
  event.preventDefault()
  $('#newgamemsg').html('New Game Started!')
  $('#newgamemsg').css('background-color', 'pink')
  setTimeout(() => {
    $('#newgamemsg').html('')
  }, 3000
  )
  api.createGame()
    .then(ui.onCreateGame)
  $('.game-board').removeClass('hidden')
  $('.box').html('')
  board = ['', '', '', '', '', '', '', '', '']
  turn = player2
  $('#message').html('Player X, Begin!')
  $('#message').css('background-color', 'white')
}
const getGames = function (event) {
  event.preventDefault()
  $('#usercontent').removeClass('hidden')
  api.index()
    .then(ui.onGetGamesSuccess)
}
const hideGames = function () {
  event.preventDefault()
  $('#usercontent').addClass('hidden')
}
const setArray = function () {
  board[0] = $('#box-0').text()
  board[1] = $('#box-1').text()
  board[2] = $('#box-2').text()
  board[3] = $('#box-3').text()
  board[4] = $('#box-4').text()
  board[5] = $('#box-5').text()
  board[6] = $('#box-6').text()
  board[7] = $('#box-7').text()
  board[8] = $('#box-8').text()
}
const winCondition = function () {
  board[0] = $('#box-0').text()
  board[1] = $('#box-1').text()
  board[2] = $('#box-2').text()
  board[3] = $('#box-3').text()
  board[4] = $('#box-4').text()
  board[5] = $('#box-5').text()
  board[6] = $('#box-6').text()
  board[7] = $('#box-7').text()
  board[8] = $('#box-8').text()

  if ((board[0] === 'X' && board[0] === board[1] && board[1] === board[2]) ||
  (board[3] === 'X' && board[3] === board[4] && board[3] === board[5]) ||
  (board[6] === 'X' && board[6] === board[7] && board[6] === board[8]) ||
  (board[0] === 'X' && board[0] === board[3] && board[0] === board[6]) ||
  (board[1] === 'X' && board[1] === board[4] && board[1] === board[7]) ||
  (board[2] === 'X' && board[2] === board[5] && board[2] === board[8]) ||
  (board[0] === 'X' && board[0] === board[4] && board[0] === board[8]) ||
  (board[2] === 'X' && board[2] === board[4] && board[2] === board[6])) {
    $('#message').html('Player X wins!')
    $('#message').css('background-color', 'green')
    $('.game-board').addClass('hidden')
    isOver = true
    return isOver
  } else if ((board[0] === 'O' && board[0] === board[1] && board[1] === board[2]) ||
(board[3] === 'O' && board[3] === board[4] && board[3] === board[5]) ||
(board[6] === 'O' && board[6] === board[7] && board[6] === board[8]) ||
(board[0] === 'O' && board[0] === board[3] && board[0] === board[6]) ||
(board[1] === 'O' && board[1] === board[4] && board[1] === board[7]) ||
(board[2] === 'O' && board[2] === board[5] && board[2] === board[8]) ||
(board[0] === 'O' && board[0] === board[4] && board[0] === board[8]) ||
(board[2] === 'O' && board[2] === board[4] && board[2] === board[6])) {
    $('#message').html('Player O wins!')
    $('#message').css('background-color', 'blue')
    $('.game-board').addClass('hidden')
    isOver = true
    return isOver
  } else if ((board[0] !== '' && board[1] !== '' && board[2] !== '' &&
    board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' &&
    board[7] !== '' && board[8] !== '')) {
    $('#message').html('Its a draw!')
    $('#message').css('background-color', 'purple')
    $('.game-board').addClass('hidden')
    isOver = true
    return isOver
  }
}
const turnSwitch = function (e) {
  if (e.target.innerHTML !== 'X' && e.target.innerHTML !== 'O') {
    if (turn === player1) {
      turn = player2
      $('#message').html('Turn belongs to Player X')
      $('#message').css('background-color', 'white')
    } else {
      turn = player1
      $('#message').html('Turn belongs to Player O')
      $('#message').css('background-color', 'white')
    }
    e.target.innerHTML = turn
  } else {
    $('#message').html('This space is taken!')
    $('#message').css('background-color', 'red')
    setTimeout(() => {
      $('#message').html('')
    }, 3000
    )
  }
  return turn
}

const addHandlers = function () {
  $('#restart').on('click', newGame)
  $('#allgames').on('click', getGames)
  $('#hidegames').on('click', hideGames)
  $('.box').on('click', function (event) {
    event.preventDefault()
    turnSwitch(event)
    setArray()
    winCondition()
    dataPatch(event.target.getAttribute('data-space'))
  })
}

module.exports = {
  addHandlers,
  player1,
  player2,
  board,
  setArray,
  newGame,
  winCondition,
  dataPatch
}
