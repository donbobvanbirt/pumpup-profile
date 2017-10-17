// returns first three lines of string
export function summarizeString(str) {

  const arr = str.replace(/\n\s*\n/g, '\n').split(/\n/)

  const line1  = arr[0]

  // returns first 100 characters when no line breaks
  if (line1.length > 99) {
    return line1.slice(0, 100)
  }

  if (arr.length === 1) {
    return line1.slice(0, 100)
  }

  const line2 = arr[1]
  const line3 = arr[2]

  // determine if text will take up more than one line
  if (line1.length > 40) {
    return `${line1} [lineBreak] ${line2.slice(0, 40)}`
  }

  if (line2.length > 40) {
    return `${line1} [lineBreak] ${line2.slice(0, 80)}`
  }

  return `${line1} [lineBreak] ${line2} [lineBreak] ${line3 ? line3.slice(0, 30) : ''}`
}
