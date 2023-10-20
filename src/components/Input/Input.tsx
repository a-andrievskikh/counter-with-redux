import s from './Input.module.css'
import { ViewsT } from 'app/App'
import { ChangeEvent } from 'react'
import { InputT } from 'features/Frame/FrameDisplay/FrameDisplay'
import { useSelector } from 'react-redux'
import { AppRootStateT } from 'app/store'
import { ValuesT } from 'features/Frame/frame-reducer'


export const Input = ({
                        input, onClickSetBtnHandler,
                        incorrectStartValue,
                        inputMinValue, inputMaxValue, inputStartValue,
                        setInputMinValue, setInputMaxValue, setInputStartValue, setInputCounterValue,
                      }: InputPT) => {

  const { minValue, maxValue } =
    useSelector<AppRootStateT, ValuesT>(s => s.frame)

  const wrongValues =
    (input.type === 'min' && minValue > maxValue) ||
    (input.type === 'max' && maxValue < minValue) ||
    incorrectStartValue

  const inputStyles = `${s.input}  ${wrongValues ? s.wrongValue : ''}`

  const inputValue =
    input.type === 'min' ? inputMinValue :
      input.type === 'max' ? inputMaxValue :
        inputStartValue

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (input.type === 'min') {
      setInputMinValue(Number(e.currentTarget.value))
    }
    if (input.type === 'max') {
      setInputMaxValue(Number(e.currentTarget.value))
    }
    if (input.type === 'start') {
      setInputStartValue(Number(e.currentTarget.value))
      setInputCounterValue(Number(e.currentTarget.value))
    }
  }

  const onFocusHandler = () => {
    onClickSetBtnHandler(false)
  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{`${input.title}:`}</div>
      <input className={inputStyles}
             value={inputValue}
             type="number"
             onChange={onChangeHandler}
             onFocus={onFocusHandler}
      />
    </div>
  )
}

// Types
export type InputPT = {
  input: InputT
  view: ViewsT
  isActiveSet: boolean
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

