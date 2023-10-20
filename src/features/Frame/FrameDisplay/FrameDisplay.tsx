import s from './FrameDisplay.module.css'
import { Input } from 'components/Input/Input'
import { ViewsT } from 'app/App'
import { useSelector } from 'react-redux'
import { AppRootStateT } from 'app/store'
import { ValuesT } from '../frame-reducer'


export const FrameDisplay = ({
                               view, isActiveSetBtn, setIsActiveSetBtn,
                               onClickSetBtnHandler, incorrectStartValue,
                               inputMinValue, inputMaxValue, inputStartValue, inputCounterValue,
                               setInputMinValue, setInputMaxValue, setInputStartValue, setInputCounterValue,
                             }: FrameDisplayPT) => {

  const { counterValue, minValue, maxValue } =
    useSelector<AppRootStateT, ValuesT>(s => s.frame)

  const inputs: InputT[] = [
    { type: 'min', title: 'min value' },
    { type: 'max', title: 'max value' },
    { type: 'start', title: 'start value' },
  ]

  const counterStopNumber = counterValue <= minValue || counterValue >= maxValue
  const displayValueStyles = `${s.counterDisplay} ${counterStopNumber ? s.counterStopNumber : ''}`
  const incorrectStartValueStyles = `${incorrectStartValue ? s.incorrectStartValue : ''}`

  return (
    <div className={s.counterDisplay}>
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
export type InputTypesValuesT = 'min' | 'max' | 'start'
export type InputTitlesT = 'min value' | 'max value' | 'start value'
export type InputT = {
  type: InputTypesValuesT
  title: InputTitlesT
}