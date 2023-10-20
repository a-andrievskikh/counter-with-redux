import {
  decValueAC,
  counterReducer,
  incValueAC,
  resValueAC,
  setCounterValueAC, setMaxValueAC,
  setMinValueAC, setStartValueAC, CounterStateT,
} from 'features/Frame/counter-reducer'

let startState: CounterStateT

beforeEach(() => {
  startState = {
    values: {
      counterValue: 0,
      minValue: 0,
      maxValue: 0,
      startValue: 0,
      resetValue: 0,
    },
    frames: [
      { view: 'settings' },
      { view: 'counter' },
    ],
    inputs: [
      { type: 'min', title: 'min value' },
      { type: 'max', title: 'max value' },
      { type: 'start', title: 'start value' },
    ],
  }
})

test('counter value should be increased by one', () => {
  const endState = counterReducer(startState, incValueAC())

  expect(endState.values.counterValue).toBe(1)
})

test('counter value should be decreased by one', () => {
  const endState = counterReducer(startState, decValueAC())

  expect(endState.values.counterValue).toBe(-1)
})

test('counter value should be equal to the start value', () => {
  const endState = counterReducer(startState, resValueAC())

  expect(endState.values.counterValue).toBe(startState.values.startValue)
})

test('min value should be equal to one', () => {
  const endState = counterReducer(startState, setMinValueAC(1))

  expect(endState.values.minValue).toBe(1)
})

test('max value should be equal to one', () => {
  const endState = counterReducer(startState, setMaxValueAC(1))

  expect(endState.values.maxValue).toBe(1)
})

test('counter value should be equal to one', () => {
  const endState = counterReducer(startState, setCounterValueAC(1))

  expect(endState.values.counterValue).toBe(1)
})

test('start value should be equal to one', () => {
  const endState = counterReducer(startState, setStartValueAC(1))

  expect(endState.values.startValue).toBe(1)
})