import { useEffect, useState } from 'react'
import s from './App.module.css'
import { Frame } from '../features/Frame/Frame'
import { restoreState, saveState } from '../utils/local-storage'
import { useSelector } from 'react-redux'
import { AppRootStateT } from './store'
import { CounterT } from '../features/Frame/frame-reducer'


export const App = () => {
  const state = useSelector<AppRootStateT, CounterT>(s => s.frame)
  restoreState('values', state)
  const frames: FramesT[] = [
    { view: 'settings' },
    { view: 'counter' },
  ]

  /*const [state, setState] = useState<StateT>({
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
  )*/

  const [isActiveSetBtn, setIsActiveSetBtn] = useState<boolean>(true)

  const [inputMinValue, setInputMinValue] = useState<number>(state.minValue)
  const [inputMaxValue, setInputMaxValue] = useState<number>(state.maxValue)
  const [inputStartValue, setInputStartValue] = useState<number>(state.startValue)
  const [inputCounterValue, setInputCounterValue] = useState<number>(state.counterValue)

  useEffect(() => {
    saveState('values', state)
  }, [state])

  console.log(JSON.stringify(state, null, ' '))

  return (
    <div className={s.App}>
      {
        frames.map(f =>
          <Frame key={f.view}
                 view={f.view}
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
/*export type StateT = {
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
}*/
