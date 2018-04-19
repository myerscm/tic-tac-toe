'use strict'
const store = require('../store')
const signUpSuccess = function () {
  $('#authmessage').html('Successfully signed up! Sign in to continue')
  $('#authmessage').css('background-color', 'green')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 8000
  )
  $('#togglesu').addClass('hidden')
}
const signInSuccess = function (data) {
  $('#authmessage').html('Successfully signed in!')
  $('#authmessage').css('background-color', 'green')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
  $('#togglesu').addClass('hidden')
  $('#togglesi').addClass('hidden')
  $('#togglecp').removeClass('hidden')
  $('#toggleso').removeClass('hidden')
  $('#apibuttons').removeClass('hidden')
  $('#boardmsg').removeClass('hidden')
  $('#createbtn').removeClass('hidden')
  $('#modalbtn').text('User options')
  $('form').trigger('reset')
  console.log(data)
  store.user = data.user
}

const signUpFailure = function () {
  $('#authmessage').html('Failure signing up')
  $('#authmessage').css('background-color', 'red')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
}
const signInFailure = function () {
  $('#authmessage').html('Failure signing in')
  $('#authmessage').css('background-color', 'red')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
}
const changePasswordSuccess = function () {
  $('#authmessage').html('Successfully changed password')
  $('#authmessage').css('background-color', 'green')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#authmessage').html('Failure changing password')
  $('#authmessage').css('background-color', 'red')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
}
const signOutSuccess = function () {
  $('#authmessage').html('Successfully signed out')
  $('#authmessage').css('background-color', 'green')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
  $('#togglesu').removeClass('hidden')
  $('#togglesi').removeClass('hidden')
  $('#togglecp').addClass('hidden')
  $('#toggleso').addClass('hidden')
  $('#apibuttons').addClass('hidden')
  $('.game-board').addClass('hidden')
  $('#boardmsg').addClass('hidden')
  $('#createbtn').addClass('hidden')
  $('#usercontent').addClass('hidden')
  $('#modalbtn').text('Sign in to play!')
  store.user = null
}
const signOutFailure = function () {
  $('#authmessage').html('Failure signing out')
  $('#authmessage').css('background-color', 'red')
  setTimeout(() => {
    $('#authmessage').html('')
  }, 3000
  )
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
