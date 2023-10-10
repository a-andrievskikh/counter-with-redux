import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { StateT, ViewsT } from '../../App'


export const Frame = ({
                        view, state, isActiveSetBtn, setIsActiveSetBtn,
                        inputMinValue,
                        inputMaxValue,
                        inputStartValue,
                        inputCounterValue,
                        setInputMinValue,
                        setInputMaxValue,
                        setInputStartValue,
                        setInputCounterValue,
                      }: FramePT) => {
  const { controls } = state

  const onClickSetBtnHandler = (value: boolean) => {
    setIsActiveSetBtn(value)
  }
  const inputSetBtn = () => {
    controls.setMinValue(inputMinValue)
    controls.setMaxValue(inputMaxValue)
    controls.setStartValue(inputStartValue)
    controls.setCounterValue(inputCounterValue)
  }

  const incorrectStartValue = inputStartValue < inputMinValue || inputStartValue > inputMaxValue

  return (
    <div className={s.main}>
      <FrameDisplay view={view}
                    state={state}
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
                 state={state}
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
  state: StateT
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



