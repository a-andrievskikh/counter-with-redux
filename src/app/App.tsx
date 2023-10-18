import { useState } from 'react'
import s from './App.module.css'
import { Frame } from '../features/Frame/Frame'
import { useSelector } from 'react-redux'
import { AppRootStateT } from './store'
import { ValuesT } from '../features/Frame/frame-reducer'


export const App = () => {
  const state = useSelector<AppRootStateT, ValuesT>(s => s.frame)

  const frames: FramesT[] = [
    { view: 'settings' },
    { view: 'counter' },
  ]

  const [isActiveSetBtn, setIsActiveSetBtn] = useState<boolean>(true)

  const [inputMinValue, setInputMinValue] = useState<number>(state.minValue)
  const [inputMaxValue, setInputMaxValue] = useState<number>(state.maxValue)
  const [inputStartValue, setInputStartValue] = useState<number>(state.startValue)
  const [inputCounterValue, setInputCounterValue] = useState<number>(state.counterValue)

  return (
    <div className={s.App}> Counter
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
