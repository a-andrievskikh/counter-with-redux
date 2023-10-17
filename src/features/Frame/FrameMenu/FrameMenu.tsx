import s from './FrameMenu.module.css'
import { Button } from '../../../components/Button/Button'
import { ViewsT } from '../../../app/App'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateT } from '../../../app/store'
import { CounterT, decValueAC, incValueAC, resValueAC } from '../frame-reducer'


export const FrameMenu = ({
                            view, isActiveSetBtn,
                            onClickSetBtnHandler, incorrectStartValue, inputSetBtn,
                          }: FrameMenuPT) => {
  const state = useSelector<AppRootStateT, CounterT>(s => s.frame)
  const dispatch = useDispatch()

  const getButtonStates = (state: CounterT, isActiveSetBtn: boolean, incorrectStartValue: boolean) => {
    const decButtonDisabled =
      !isActiveSetBtn || state.counterValue <= state.minValue || state.startValue <= state.minValue
    const incButtonDisabled =
      !isActiveSetBtn || state.counterValue >= state.maxValue || state.startValue >= state.maxValue
    const resButtonDisabled =
      !isActiveSetBtn || state.counterValue === state.startValue
    const setButtonDisabled = isActiveSetBtn || incorrectStartValue

    return { decButtonDisabled, incButtonDisabled, resButtonDisabled, setButtonDisabled }
  }

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
                  inputSetBtn={inputSetBtn}
          />
          :
          <>
            <Button title={'DEC'} onClickHandler={() => dispatch(decValueAC())}
                    disabled={decButtonDisabled} />
            <Button title={'RESET'} onClickHandler={() => dispatch(resValueAC())}
                    disabled={resButtonDisabled || incorrectStartValue} />
            <Button title={'INC'} onClickHandler={() => dispatch(incValueAC())}
                    disabled={incButtonDisabled} />
          </>
      }
    </div>
  )
}

// Types
export type FrameMenuPT = {
  view: ViewsT
  isActiveSetBtn: boolean
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
  inputSetBtn: () => void
}