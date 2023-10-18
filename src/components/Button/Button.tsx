import s from '../Button/Button.module.css'


export const Button = ({
                         title, isActiveSetBtn, onClickHandler,
                         onClickSetBtnHandler, disabled, inputValuesSetBtn,
                       }: ButtonPT) => {

  const buttonStyles = `${s.button} ${disabled ? s.disabled : ''}`
  const handleClick =
    title === 'SET' ? () => {
      inputValuesSetBtn?.()
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
  inputValuesSetBtn?: () => void
}