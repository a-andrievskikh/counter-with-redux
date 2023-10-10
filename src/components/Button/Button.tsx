import s from '../Button/Button.module.css'
import { StateT } from '../../App'


export const Button = ({
                         title, isActiveSetBtn, onClickHandler,
                         onClickSetBtnHandler, disabled, inputSetBtn,
                       }: ButtonPT) => {

  const buttonStyles = `${s.button} ${disabled ? s.disabled : ''}`
  const handleClick =
    title === 'SET' ? () => {
      inputSetBtn?.()
      onClickSetBtnHandler?.(!isActiveSetBtn)
    } : onClickHandler

  return (
    <button className={buttonStyles}
            onClick={handleClick}
            disabled={disabled}
    >
      {title}
    </button>
  )
}

// Types
export type ButtonPT = {
  title: string
  isActiveSetBtn?: boolean
  onClickHandler?: () => void
  onClickSetBtnHandler?: (value: boolean) => void
  disabled: boolean
  state?: StateT
  inputSetBtn?: () => void
}