import { trimLines } from 'trim-lines'

// Reduces line breaks more then twice
// Trims lines
// Reduces spaces more than once
export function sanitizeTypeAreaInput(input: string) {
  return trimLines(input.replace(/\n\n\n+/g, '\n\n'))
    .split('\n')
    .map(line => line.replace(/\s\s+/g, ' '))
    .join('\n')
}

export function logOut() {
  document.cookie = ''

  for (const key of Object.keys(localStorage))
    localStorage.removeItem(key)

  window.location.assign(window.location.origin)
}
