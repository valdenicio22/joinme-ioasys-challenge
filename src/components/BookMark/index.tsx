import * as S from './styles'
type BookMarkProps = {
  isBooked?: boolean
}

const BookMark = ({ isBooked }: BookMarkProps) => (
  <S.Wrapper>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.5278C1 3.92197 1 2.61906 1.87868 1.80953C2.75736 1 4.17157 1 7 1H11C13.8284 1 15.2426 1 16.1213 1.80953C17 2.61906 17 3.92197 17 6.5278V12.8181C17 15.2902 17 16.5263 16.1557 16.9043C15.3114 17.2824 14.2565 16.5187 12.1465 14.9914L11.4713 14.5026C10.2849 13.6438 9.69173 13.2144 9 13.2144C8.30827 13.2144 7.71509 13.6438 6.52871 14.5026L5.85346 14.9914C3.74355 16.5187 2.68859 17.2824 1.84429 16.9043C1 16.5263 1 15.2902 1 12.8181V6.5278Z"
        fill={isBooked ? '#1E00FC' : 'none'}
      />
      <path
        d="M11.4713 14.5026L11.9111 13.8951V13.8951L11.4713 14.5026ZM6.52871 14.5026L6.96849 15.1101H6.96849L6.52871 14.5026ZM5.85346 14.9914L5.41368 14.3839H5.41368L5.85346 14.9914ZM12.1465 14.9914L11.7068 15.5989V15.5989L12.1465 14.9914ZM7 1.75H11V0.25H7V1.75ZM16.25 6.5278V12.8181H17.75V6.5278H16.25ZM1.75 12.8181V6.5278H0.25V12.8181H1.75ZM12.5863 14.3839L11.9111 13.8951L11.0315 15.1101L11.7068 15.5989L12.5863 14.3839ZM6.08893 13.8951L5.41368 14.3839L6.29324 15.5989L6.96849 15.1101L6.08893 13.8951ZM11.9111 13.8951C11.3321 13.4759 10.8467 13.1231 10.4168 12.8822C9.96902 12.6312 9.51932 12.4644 9 12.4644V13.9644C9.17241 13.9644 9.36517 14.0123 9.68346 14.1907C10.0198 14.3792 10.4241 14.6705 11.0315 15.1101L11.9111 13.8951ZM6.96849 15.1101C7.57586 14.6705 7.98023 14.3792 8.31654 14.1907C8.63484 14.0123 8.82759 13.9644 9 13.9644V12.4644C8.48068 12.4644 8.03098 12.6312 7.58316 12.8822C7.15335 13.1231 6.66794 13.4759 6.08893 13.8951L6.96849 15.1101ZM0.25 12.8181C0.25 14.0265 0.247702 15.0258 0.364799 15.764C0.483232 16.5106 0.762798 17.2418 1.53778 17.5888L2.15081 16.2198C2.0815 16.1888 1.93892 16.113 1.84627 15.529C1.7523 14.9366 1.75 14.0818 1.75 12.8181H0.25ZM5.41368 14.3839C4.33904 15.1618 3.59871 15.6954 3.02381 15.9993C2.4446 16.3054 2.24492 16.262 2.15081 16.2198L1.53778 17.5888C2.28796 17.9247 3.03791 17.6885 3.72473 17.3255C4.41586 16.9602 5.25797 16.3483 6.29324 15.5989L5.41368 14.3839ZM16.25 12.8181C16.25 14.0818 16.2477 14.9366 16.1537 15.529C16.0611 16.113 15.9185 16.1888 15.8492 16.2198L16.4622 17.5888C17.2372 17.2418 17.5168 16.5106 17.6352 15.764C17.7523 15.0258 17.75 14.0265 17.75 12.8181H16.25ZM11.7068 15.5989C12.742 16.3483 13.5841 16.9602 14.2753 17.3255C14.9621 17.6885 15.712 17.9247 16.4622 17.5888L15.8492 16.2198C15.7551 16.262 15.5554 16.3054 14.9762 15.9993C14.4013 15.6954 13.661 15.1618 12.5863 14.3839L11.7068 15.5989ZM11 1.75C12.4338 1.75 13.4395 1.75136 14.1996 1.8455C14.944 1.93771 15.338 2.10764 15.6131 2.36112L16.6295 1.25794C16.026 0.70189 15.2735 0.467058 14.384 0.356879C13.5102 0.248644 12.3946 0.25 11 0.25V1.75ZM17.75 6.5278C17.75 5.24785 17.7519 4.20608 17.6323 3.38675C17.5086 2.53912 17.2418 1.82205 16.6295 1.25794L15.6131 2.36112C15.8795 2.60654 16.0521 2.94569 16.148 3.60335C16.2481 4.28932 16.25 5.20193 16.25 6.5278H17.75ZM7 0.25C5.60536 0.25 4.4898 0.248644 3.61599 0.356879C2.72648 0.467058 1.97405 0.70189 1.3705 1.25794L2.38686 2.36112C2.66199 2.10764 3.056 1.93771 3.80038 1.8455C4.56045 1.75136 5.56621 1.75 7 1.75V0.25ZM1.75 6.5278C1.75 5.20193 1.75187 4.28932 1.85197 3.60335C1.94795 2.94569 2.12048 2.60654 2.38686 2.36112L1.3705 1.25794C0.758203 1.82205 0.491392 2.53912 0.367696 3.38675C0.24813 4.20608 0.25 5.24785 0.25 6.5278H1.75Z"
        fill="#1E00FC"
      />
    </svg>
  </S.Wrapper>
)

export default BookMark
