import s from './Input.module.css'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { AppRootState } from 'app/store'
import { InputT, InputTypesValuesT, ViewsT } from 'features/Frame/counter-reducer'


export const Input = ({
                        input, onClickSetBtnHandler,
                        incorrectStartValue,
                        inputMinValue, inputMaxValue, inputStartValue,
                        setInputMinValue, setInputMaxValue, setInputStartValue, setInputCounterValue,
                      }: InputPT) => {

  const minValue = useSelector<AppRootState, number>(s => s.counter.values.minValue)
  const maxValue = useSelector<AppRootState, number>(s => s.counter.values.maxValue)

  const inputType: InputTypesValuesT = input.type

  const wrongValues =
    (inputType === 'min' && minValue > maxValue) ||
    (inputType === 'max' && maxValue < minValue) ||
    incorrectStartValue

  const inputStyles = `${s.input}  ${wrongValues ? s.wrongValue : ''}`

  const inputValue =
    inputType === 'min' ? inputMinValue :
      inputType === 'max' ? inputMaxValue :
        inputStartValue

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputType === 'min') {
      setInputMinValue(Number(e.currentTarget.value))
    }
    if (inputType === 'max') {
      setInputMaxValue(Number(e.currentTarget.value))
    }
    if (inputType === 'start') {
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

