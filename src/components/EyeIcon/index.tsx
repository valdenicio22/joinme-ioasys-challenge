import { MouseEventHandler } from 'react'
import * as S from './styles'

type EyeIconProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const EyeIcon = ({ onClick }: EyeIconProps) => (
  <S.Wrapper onClick={onClick}>
    <svg
      width="20"
      height="16"
      viewBox="0 -2 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      aria-label="Button to see the typed password"
    >
      <path
        d="M12.61 2.14L10.84 3.92C10.1616 3.73796 9.44724 3.73777 8.76875 3.91944C8.09026 4.10111 7.47157 4.45824 6.9749 4.9549C6.47824 5.45157 6.12111 6.07026 5.93944 6.74875C5.75777 7.42724 5.75796 8.14161 5.94 8.82L3.18 11.57C1.86 10.57 0.76 9.27 0 7.78C1.14092 5.54284 3.01299 3.76341 5.30513 2.73741C7.59727 1.7114 10.1715 1.50059 12.6 2.14H12.61ZM16.41 3.99C17.74 4.99 18.84 6.29 19.61 7.78C18.4683 10.0213 16.593 11.8036 14.2966 12.8299C12.0001 13.8562 9.42136 14.0645 6.99 13.42L8.76 11.64C9.43839 11.822 10.1528 11.8222 10.8312 11.6406C11.5097 11.4589 12.1284 11.1018 12.6251 10.6051C13.1218 10.1084 13.4789 9.48974 13.6606 8.81125C13.8422 8.13276 13.842 7.41839 13.66 6.74L16.42 3.99H16.41ZM16.16 0L17.58 1.42L3.44 15.56L2.02 14.14L16.16 0Z"
        fill="#757678"
      />
    </svg>
  </S.Wrapper>
)

export default EyeIcon
