import s from './FrameMenu.module.css'
import { Button } from 'components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootState } from 'app/store'
import { decValueAC, incValueAC, resValueAC, setCounterValueAC, ViewsT } from 'features/Frame/counter-reducer'


export const FrameMenu = ({
                            view, isActiveSetBtn,
                            onClickSetBtnHandler, incorrectStartValue, inputValuesSetBtn,
                          }: FrameMenuPT) => {

  const counterValue = useSelector<AppRootState, number>(s => s.counter.values.counterValue)
  const minValue = useSelector<AppRootState, number>(s => s.counter.values.minValue)
  const maxValue = useSelector<AppRootState, number>(s => s.counter.values.maxValue)
  const resetValue = useSelector<AppRootState, number>(s => s.counter.values.resetValue)
  const startValue = useSelector<AppRootState, number>(s => s.counter.values.startValue)


  const dispatch = useDispatch()

  const decButtonDisabled =
    !isActiveSetBtn || counterValue <= minValue || startValue <= minValue

  const incButtonDisabled =
    !isActiveSetBtn || counterValue >= maxValue || startValue >= maxValue

  const resButtonDisabled =
    !isActiveSetBtn || counterValue === startValue

  const setButtonDisabled = isActiveSetBtn || incorrectStartValue

  return (
    <div className={s.menu}>
      {
        view === 'settings' ?
          <Button title={'SET'}
                  isActiveSetBtn={isActiveSetBtn}
                  onClickSetBtnHandler={onClickSetBtnHandler}
                  disabled={setButtonDisabled}
                  inputValuesSetBtn={inputValuesSetBtn}
          />
          :
          <>
            <Button title={'DEC'}
                    onClickHandler={() => dispatch(decValueAC())}
                    disabled={decButtonDisabled} />
            <Button title={'RESET'}
                    onClickHandler={() => {
                      dispatch(resValueAC())
                      dispatch(setCounterValueAC(resetValue))
                    }
                    }
                    disabled={resButtonDisabled || incorrectStartValue} />
            <Button title={'INC'}
                    onClickHandler={() => dispatch(incValueAC())}
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
  inputValuesSetBtn: () => void
}