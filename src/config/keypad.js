const keypad = [
  [{
    name: 'AC',
    value: '',
    type: 'specialOperator',
    func: 'reset'
  }, {
    name: '+/-',
    value: '',
    type: 'specialOperator',
    func: 'reset'
  }, {
    name: '%',
    value: '',
    type: 'specialOperator',
    func: 'reset'
  }, {
    name: '÷',
    value: '/',
    type: 'operator',
    func: 'express'
  }],
  [{
    name: '7',
    value: '7',
    type: 'number',
    func: 'express'
  }, {
    name: '8',
    value: '8',
    type: 'number',
    func: 'express'
  }, {
    name: '9',
    value: '9',
    type: 'number',
    func: 'express'
  }, {
    name: '×',
    value: '*',
    type: 'operator',
    func: 'express'
  }],
  [{
    name: '4',
    value: '4',
    type: 'number',
    func: 'express'
  }, {
    name: '5',
    value: '5',
    type: 'number',
    func: 'express'
  }, {
    name: '6',
    value: '6',
    type: 'number',
    func: 'express'
  }, {
    name: '-',
    value: '-',
    type: 'operator',
    func: 'express'
  }],
  [{
    name: '1',
    value: '1',
    type: 'number',
    func: 'express'
  }, {
    name: '2',
    value: '2',
    type: 'number',
    func: 'express'
  }, {
    name: '3',
    value: '3',
    type: 'number',
    func: 'express'
  }, {
    name: '+',
    value: '+',
    type: 'operator',
    func: 'express'
  }],
  [{
    name: '0',
    value: '0',
    type: 'number',
    func: 'express',
    option: { zero: 'zero' }
  }, {
    name: '.',
    value: '.',
    type: 'number',
    func: 'express'
  }, {
    name: '=',
    value: '=',
    type: 'operator',
    func: 'evaluate'
  }]
]

export default keypad;