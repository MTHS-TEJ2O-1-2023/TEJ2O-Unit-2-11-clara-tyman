/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Oct 2023
 * This program compares 2 random numbers from 0-99.
*/

// variables
const firstNumber: number = randint(0, 99)
const secondNumber: number = randint(0, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show 1st number
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('#1 : ' + firstNumber.toString())
})

// show 2nd number
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2 : ' + secondNumber.toString())
})

// compare both numbers
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()
  if (firstNumber < secondNumber) {
    basic.showString(firstNumber.toString() + '<' + secondNumber.toString())
  } else {
    basic.showString(firstNumber.toString() + '>' + secondNumber.toString())
  }
  basic.showIcon(IconNames.Sad)
})
