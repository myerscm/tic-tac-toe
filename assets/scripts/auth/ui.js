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
