require('source-map-support').install()
_ = require('lodash')
moment = require 'moment'
ohlc = require '../'
objData = require '../sample/objData.json'
arrayData = require '../sample/arrayData.json'
{decimalPlace} = require '../lib/util'
Big = require('big.js')

test 'decimalPlace', () ->
  expect decimalPlace(1)
  .toBe 0
  expect decimalPlace(1000000)
  .toBe 0
  expect decimalPlace(0.000001)
  .toBe 6
  # expect decimalPlace(0.00000000000000000000000000000000001)
  # .toBe 6
test 'Math.abs', ->
  expect Math.abs(0.0000001)
  .toBe 1e-7


test.skip '10桁以上のround', ->
  expect Big(0.12345678901234567890123456789012345).round(30).toString()
  .toBe '0.12345678901234567890'
