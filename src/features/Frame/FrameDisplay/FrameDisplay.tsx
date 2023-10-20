import s from './FrameDisplay.module.css'
import { Input } from 'components/Input/Input'
import { useSelector } from 'react-redux'
import { AppRootState } from 'app/store'
import { InputT, ViewsT } from 'features/Frame/counter-reducer'


export const FrameDisplay = ({
                               view, isActiveSetBtn, setIsActiveSetBtn,
                               onClickSetBtnHandler, incorrectStartValue,
                               inputMinValue, inputMaxValue, inputStartValue, inputCounterValue,
                               setInputMinValue, setInputMaxValue, setInputStartValue, setInputCounterValue,
                             }: FrameDisplayPT) => {

  const counterValue = useSelector<AppRootState, number>(s => s.counter.values.counterValue)
  const minValue = useSelector<AppRootState, number>(s => s.counter.values.minValue)
  const maxValue = useSelector<AppRootState, number>(s => s.counter.values.maxValue)
  const inputs = useSelector<AppRootState, InputT[]>(s => s.counter.inputs)

  const counterStopNumber = counterValue <= minValue || counterValue >= maxValue
  const displayValueStyles = `${s.display} ${counterStopNumber ? s.counterStopNumber : ''}`
  const incorrectStartValueStyles = `${incorrectStartValue ? s.incorrectStartValue : ''}`

  return (
    <div className={s.display}>
      {
        view === 'settings' ? (
            <>
              {
                inputs.map(i =>
                  <Input key={i.type}
                         input={i}
                         view={view}
                         isActiveSet={isActiveSetBtn}
                         setIsActiveSetBtn={setIsActiveSetBtn}
                         onClickSetBtnHandler={onClickSetBtnHandler}
                         incorrectStartValue={incorrectStartValue}
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
            </>
          )
          :
          (
            <>
              {
                isActiveSetBtn ? <div className={displayValueStyles}>{counterValue}</div> :
                  incorrectStartValue ? <div className={incorrectStartValueStyles}>Incorrect value!</div> :
                    <div className={s.setBtnStyle}>Enter values and press 'SET'</div>
              }
            </>
          )
      }
    </div>
  )
}

// Types
export type FrameDisplayPT = {
  view: ViewsT
  isActiveSetBtn: boolean
  setIsActiveSetBtn: (value: boolean) => void
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
  inputMinValue: number
  inputMaxValue: number
  inputStartValue: number
  inputCounterValue: number
  setInputMinValue: (value: number) => void
  setInputMaxValue: (value: number) => void
  setInputStartValue: (value: number) => void
  setInputCounterValue: (value: number) => void
}