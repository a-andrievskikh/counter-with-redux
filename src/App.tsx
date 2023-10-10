import { useEffect, useState } from 'react'
import s from './App.module.css'
import { Frame } from './components/Frame/Frame'
import { restoreState, saveState } from './utils/local-storage'


export const App = () => {
  const frames: FramesT[] = [
    { view: 'settings' },
    { view: 'counter' },
  ]
  const [state, setState] = useState<StateT>({
      values: restoreState('values', {
        counterValue: 0,
        minValue: 0,
        maxValue: 0,
        startValue: 0,
        resetValue: 0,
      }),
      controls: {
        incValue() {
          setState((prevValues) => ({
            ...prevValues,
            values: { ...prevValues.values, counterValue: prevValues.values.counterValue + 1 },
          }))
        },
        decValue() {
          setState((prevValues) => ({
            ...prevValues,
            values: { ...prevValues.values, counterValue: prevValues.values.counterValue - 1 },
          }))
        },
        resValue() {
          setState((prevValues) => ({
            ...prevValues,
            values: { ...prevValues.values, counterValue: prevValues.values.startValue },
          }))
        },
        setMinValue(value: number) {
          setState((prevValues) => ({ ...prevValues, values: { ...prevValues.values, minValue: value } }))
        },
        setMaxValue(value: number) {
          setState((prevValues) => ({ ...prevValues, values: { ...prevValues.values, maxValue: value } }))
        },
        setStartValue(value: number) {
          setState((prevValues) => ({ ...prevValues, values: { ...prevValues.values, startValue: value } }))
        },
        setCounterValue(value: number) {
          setState((prevValues) => ({ ...prevValues, values: { ...prevValues.values, counterValue: value } }))
        },
      },
    },
  )
  const [isActiveSetBtn, setIsActiveSetBtn] = useState<boolean>(true)

  const [inputMinValue, setInputMinValue] = useState<number>(state.values.minValue)
  const [inputMaxValue, setInputMaxValue] = useState<number>(state.values.maxValue)
  const [inputStartValue, setInputStartValue] = useState<number>(state.values.startValue)
  const [inputCounterValue, setInputCounterValue] = useState<number>(state.values.counterValue)

  useEffect(() => {
    saveState('values', state.values)
  }, [state.values])

  return (
    <div className={s.App}>
      {
        frames.map(f =>
          <Frame key={f.view}
                 view={f.view}
                 state={state}
                 isActiveSetBtn={isActiveSetBtn}
                 setIsActiveSetBtn={setIsActiveSetBtn}
                 inputMinValue={inputMinValue}
                 inputMaxValue={inputMaxValue}
                 inputStartValue={inputStartValue}
                 inputCounterValue={inputCounterValue}
                 setInputMinValue={setInputMinValue}
                 setInputMaxValue={setInputMaxValue}
                 setInputStartValue={setInputStartValue}
                 setInputCounterValue={setInputCounterValue}
          />,
        )
      }
    </div>
  )
}

// Types
export type ViewsT = 'settings' | 'counter'
export type FramesT = { view: ViewsT }
export type StateT = {
  values: ValuesT
  controls: ControlsT
}
export type ValuesT = {
  counterValue: number,
  startValue: number,
  minValue: number,
  maxValue: number,
  resetValue: number,
}
export type ControlsT = {
  incValue: () => void
  decValue: () => void
  resValue: () => void
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
}
