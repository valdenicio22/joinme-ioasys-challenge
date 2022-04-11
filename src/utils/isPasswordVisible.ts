import { MouseEvent } from 'react'

export const isPasswordVisible = (
  e: MouseEvent,
  isVisible: 'text' | 'password'
) => {
  e.preventDefault()

  if (isVisible === 'password') return 'text'
  return 'password'
}
