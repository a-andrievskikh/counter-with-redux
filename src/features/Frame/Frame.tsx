import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { ViewsT } from '../../app/App'
import { useDispatch } from 'react-redux'
import { setMinValueAC, setMaxValueAC, setStartValueAC, setCounterValueAC } from './frame-reducer'


export const Frame = ({
                        view, isActiveSetBtn, setIsActiveSetBtn,
                        inputMinValue,
                        inputMaxValue,
                        inputStartValue,
                        inputCounterValue,
                        setInputMinValue,
                        setInputMaxValue,
                        setInputStartValue,
                        setInputCounterValue,
                      }: FramePT) => {
  const dispatch = useDispatch()

  const onClickSetBtnHandler = (value: boolean) => {
    setIsActiveSetBtn(value)
  }
  const inputSetBtn = () => {
    dispatch(setMinValueAC(inputMinValue))
    dispatch(setMaxValueAC(inputMaxValue))
    dispatch(setStartValueAC(inputStartValue))
    dispatch(setCounterValueAC(inputStartValue))
  }

  const incorrectStartValue = inputStartValue < inputMinValue || inputStartValue > inputMaxValue

  return (
    <div className={s.main}>
      <FrameDisplay view={view}
                    isActiveSetBtn={isActiveSetBtn}
                    setIsActiveSetBtn={setIsActiveSetBtn}
                    onClickSetBtnHandler={onClickSetBtnHandler}
                    incorrectStartValue={incorrectStartValue}
                    inputSetBtn={inputSetBtn}
                    inputMinValue={inputMinValue}
                    inputMaxValue={inputMaxValue}
                    inputStartValue={inputStartValue}
                    inputCounterValue={inputCounterValue}
                    setInputMinValue={setInputMinValue}
                    setInputMaxValue={setInputMaxValue}
                    setInputStartValue={setInputStartValue}
                    setInputCounterValue={setInputCounterValue}
      />
      <FrameMenu view={view}
                 isActiveSetBtn={isActiveSetBtn}
                 onClickSetBtnHandler={onClickSetBtnHandler}
                 incorrectStartValue={incorrectStartValue}
                 inputSetBtn={inputSetBtn}
      />
    </div>
  )
}

// Types
export type FramePT = {
  view: ViewsT
  isActiveSetBtn: boolean
  setIsActiveSetBtn: (value: boolean) => void
  inputMinValue: number
  inputMaxValue: number
  inputStartValue: number
  inputCounterValue: number
  setInputMinValue: (value: number) => void
  setInputMaxValue: (value: number) => void
  setInputStartValue: (value: number) => void
  setInputCounterValue: (value: number) => void
}



