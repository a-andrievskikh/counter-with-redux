import {
  CounterT,
  decValueAC,
  frameReducer,
  incValueAC,
  resValueAC,
  setCounterValueAC, setMaxValueAC,
  setMinValueAC,
} from './frame-reducer'

let startState: CounterT

beforeEach(() => {
  startState = {
    counterValue: 0,
    minValue: 0,
    maxValue: 0,
    startValue: 0,
    resetValue: 0,
  }
})

test('counter value should be increased by one', () => {
  const endState = frameReducer(startState, incValueAC())

  expect(endState.counterValue).toBe(1)
})

test('counter value should be decreased by one', () => {
  const endState = frameReducer(startState, decValueAC())

  expect(endState.counterValue).toBe(-1)
})

test('counter value should be equal to the start value', () => {
  const endState = frameReducer(startState, resValueAC())

  expect(endState.counterValue).toBe(startState.startValue)
})

test('min value should be equal to one', () => {
  const endState = frameReducer(startState, setMinValueAC(1))

  expect(endState.minValue).toBe(1)
})

test('max value should be equal to one', () => {
  const endState = frameReducer(startState, setMaxValueAC(1))

  expect(endState.maxValue).toBe(1)
})

test('counter value should be equal to one', () => {
  const endState = frameReducer(startState, setCounterValueAC(1))

  expect(endState.counterValue).toBe(1)
})