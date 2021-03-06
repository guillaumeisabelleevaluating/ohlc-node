TYPES =
  DEBUG: 'DEBUG'
  INFO: 'INFO'
  WARN: 'WARN'
  ERROR: 'ERROR'
  FATAL: 'FATAL'

module.exports =
  error:[
    [
      TYPES.ERROR
      'itemの値が不正です'
      'Item value is invalid'
    ]
    [#1
      TYPES.ERROR
      'Volumeの型が数値ではありません'
      'Volume type is not number.'
    ]
    [#2
      TYPES.ERROR
      'Volumeの値が負数です'
      'volume is Negative Number.'
    ]
    [#3
      TYPES.WARN
      '四本値が不正です'
      'Four values (ohlc) are invalid.'
    ]
    #FIXME: 無いのに?のにっておかしくない？
    [#4
      TYPES.WARN
      '出来高が無いのに四本値が異なっています'
      'Volume is zero, but the four values are different
  '
    ]
    [#5
      TYPES.WARN
      'Closeの値が不正です'
      'Close value is invalid'
    ]
  ]