import { useState } from 'react'
import s from './App.module.css'
import { useSelector } from 'react-redux'
import { Frame } from 'features/Frame/Frame'
import { AppRootState } from './store'
import { FrameT, ValuesT } from 'features/Frame/counter-reducer'


export const App = () => {
  const state = useSelector<AppRootState, ValuesT>(s => s.counter.values)
  const frames = useSelector<AppRootState, FrameT[]>(s => s.counter.frames)

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

