let isCodeBlock = false
const reg = /^\s+/
module.exports = str => str
  .split('\n')
  .map(line => {
    if (line.includes('```')) {
      isCodeBlock = !isCodeBlock
      return line.trimStart()
    }

    if (isCodeBlock === false && reg.test(line)) {
      const [indent] = line.match(reg)
      const [char] = indent
      if (indent.length > 2) {
        return `${char.repeat(2)}${line.trimStart()}`
      }
    }

    return line
  }).join('\n')
