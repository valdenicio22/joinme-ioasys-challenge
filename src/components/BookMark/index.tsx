type BookMarkProps = {
  isBooked?: boolean
}

const BookMark = ({ isBooked }: BookMarkProps) => (
  <svg
    width="25"
    height="26"
    viewBox="0 0 20 21"
    fill={isBooked ? '#1A00D0' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    background-color="red"
  >
    <path
      d="M14.1665 3H5.83317C4.9165 3 4.1665 3.75 4.1665 4.66667V18L9.99984 15.5L15.8332 18V4.66667C15.8332 3.75 15.0832 3 14.1665 3ZM14.1665 15.5L9.99984 13.6833L5.83317 15.5V5.5C5.83317 5.04167 6.20817 4.66667 6.6665 4.66667H13.3332C13.7915 4.66667 14.1665 5.04167 14.1665 5.5V15.5Z"
      fill={isBooked ? 'red' : '#1A00D0'}
    />
  </svg>
)

export default BookMark
