

// returns first three lines of string
export function summarizeString(str) {
  const linePlaceholder = ' [lineBreak] '

  // removes extra lineBreak
  // const reducedSpaceStr = str.replace(/\n\s*\n/g, linePlaceholder)

  // const summary = reducedSpaceStr.slice(0, 100)
  // split string on line-breaks
  // const arr = str.replace(/\n\s*\n/g, linePlaceholder).split(linePlaceholder)
  const arr = str.split(/\n\s*\n/)

  const line1  = arr[0]
  const line2 = arr[1]

  // if no line-breaks, returns first 100 characters
  if (line1.length > 99) {
    return line1.slice(0, 100)
  }

  if (arr.length === 1) {
    return line1.slice(0, 100)
  }

  // if text will take up more than one line
  if (line1.length > 40) {
    return `${line1}${linePlaceholder}${line2.slice(0, 40)}`
  }

  if (line2 > 40) {
    return `${line1}${linePlaceholder}${line2.slice(0, 80)}`
  }
}
