module.exports = (str) => str
  .split('\n')
  .map(line => {
    if (line.includes('```')) {
      return line.trimStart()
    }

    return line
  }).join('\n')
