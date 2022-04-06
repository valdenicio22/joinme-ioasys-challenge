import * as S from './styles'

export type ArrowProps = {
  color?: string
}

const Arrow = ({ color = 'darkPurple' }: ArrowProps) => (
  <S.Wrapper color={color}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Seta voltar tela"
    >
      <path
        d="M18.75 8.57245H3.925L8.4625 2.34444C8.67467 2.05272 8.77675 1.67664 8.74628 1.29892C8.7158 0.921206 8.55527 0.572793 8.3 0.330331C8.04473 0.0878688 7.71563 -0.0287806 7.3851 0.00604446C7.05456 0.0408695 6.74967 0.224317 6.5375 0.516029L0.2875 9.08669C0.245451 9.15486 0.207849 9.22648 0.175 9.30096C0.175 9.37238 0.175 9.41523 0.0875002 9.48665C0.0308421 9.65044 0.0011764 9.82478 0 10.0009C0.0011764 10.177 0.0308421 10.3513 0.0875002 10.5151C0.0875002 10.5866 0.0874998 10.6294 0.175 10.7008C0.207849 10.7753 0.245451 10.8469 0.2875 10.9151L6.5375 19.4858C6.65503 19.647 6.8022 19.7767 6.96856 19.8656C7.13491 19.9544 7.31636 20.0003 7.5 20C7.79207 20.0006 8.07511 19.8844 8.3 19.6715C8.42657 19.5515 8.5312 19.4043 8.60789 19.2381C8.68458 19.0719 8.73183 18.89 8.74692 18.7029C8.76202 18.5158 8.74466 18.3272 8.69586 18.1478C8.64705 17.9683 8.56775 17.8017 8.4625 17.6574L3.925 11.4293H18.75C19.0815 11.4293 19.3995 11.2788 19.6339 11.011C19.8683 10.7431 20 10.3797 20 10.0009C20 9.62205 19.8683 9.25872 19.6339 8.99083C19.3995 8.72295 19.0815 8.57245 18.75 8.57245Z"
        fill="currentColor"
      />
    </svg>
  </S.Wrapper>
)

export default Arrow
