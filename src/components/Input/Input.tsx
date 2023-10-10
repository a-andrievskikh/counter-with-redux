import s from './Input.module.css'
import { StateT, ViewsT } from '../../App'
import { ChangeEvent } from 'react'
import { InputT, InputTypeValuesT } from '../Frame/FrameDisplay/FrameDisplay'


export const Input = ({
                        input, state, onClickSetBtnHandler,
                        incorrectStartValue,
                        inputMinValue,
                        inputMaxValue,
                        inputStartValue,
                        setInputMinValue,
                        setInputMaxValue,
                        setInputStartValue,
                        setInputCounterValue,
                      }: InputPT) => {
  const { minValue, maxValue } = state.values

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
  state: StateT
  isActiveSet: boolean
  setIsActiveSetBtn: (value: boolean) => void
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
  inputSetBtn: (inputType: InputTypeValuesT) => void
  inputMinValue: number
  inputMaxValue: number
  inputStartValue: number
  inputCounterValue: number
  setInputMinValue: (value: number) => void
  setInputMaxValue: (value: number) => void
  setInputStartValue: (value: number) => void
  setInputCounterValue: (value: number) => void
}

