import s from './FrameMenu.module.css'
import { Button } from '../../Button/Button'
import { StateT, ViewsT } from '../../../App'

const getButtonStates = (state: StateT, isActiveSetBtn: boolean, incorrectStartValue: boolean) => {
  const decButtonDisabled =
    !isActiveSetBtn || state.values.counterValue <= state.values.minValue || state.values.startValue <= state.values.minValue
  const incButtonDisabled =
    !isActiveSetBtn || state.values.counterValue >= state.values.maxValue || state.values.startValue >= state.values.maxValue
  const resButtonDisabled =
    !isActiveSetBtn || state.values.counterValue === state.values.startValue
  const setButtonDisabled = isActiveSetBtn || incorrectStartValue

  return { decButtonDisabled, incButtonDisabled, resButtonDisabled, setButtonDisabled }
}

export const FrameMenu = ({
                            view, state, isActiveSetBtn,
                            onClickSetBtnHandler, incorrectStartValue, inputSetBtn,
                          }: FrameMenuPT) => {
  const { controls } = state
  const {
    decButtonDisabled,
    incButtonDisabled,
    resButtonDisabled,
    setButtonDisabled,
  } = getButtonStates(state, isActiveSetBtn, incorrectStartValue)

  return (
    <div className={s.counterMenu}>
      {
        view === 'settings' ?
          <Button title={'SET'}
                  isActiveSetBtn={isActiveSetBtn}
                  onClickSetBtnHandler={onClickSetBtnHandler}
                  disabled={setButtonDisabled}
                  state={state}
                  inputSetBtn={inputSetBtn}
          />
          :
          <>
            <Button title={'DEC'} onClickHandler={controls.decValue}
                    disabled={decButtonDisabled} />
            <Button title={'RESET'} onClickHandler={controls.resValue}
                    disabled={resButtonDisabled || incorrectStartValue} />
            <Button title={'INC'} onClickHandler={controls.incValue}
                    disabled={incButtonDisabled} />
          </>
      }
    </div>
  )
}

// Types
export type FrameMenuPT = {
  view: ViewsT
  state: StateT
  isActiveSetBtn: boolean
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
  inputSetBtn: () => void
}