import s from './FrameMenu.module.css'
import { Button } from '../../../components/Button/Button'
import { ViewsT } from '../../../app/App'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateT } from '../../../app/store'
import { ValuesT, decValueAC, incValueAC, resValueAC, setCounterValueAC } from '../frame-reducer'


export const FrameMenu = ({
                            view, isActiveSetBtn,
                            onClickSetBtnHandler, incorrectStartValue, inputValuesSetBtn,
                          }: FrameMenuPT) => {

  const { counterValue, minValue, maxValue, resetValue, startValue } =
    useSelector<AppRootStateT, ValuesT>(s => s.frame)
  const dispatch = useDispatch()

  const decButtonDisabled =
    !isActiveSetBtn || counterValue <= minValue || startValue <= minValue

  const incButtonDisabled =
    !isActiveSetBtn || counterValue >= maxValue || startValue >= maxValue

  const resButtonDisabled =
    !isActiveSetBtn || counterValue === startValue

  const setButtonDisabled = isActiveSetBtn || incorrectStartValue

  return (
    <div className={s.counterMenu}>
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