module.exports = function check(str, bracketsConfig) {
  const stack = []
  const valid = str.split('').every(b => {
    const config = bracketsConfig.find(c => c.includes(b))
    if (!config) return false
    
    if (config[0] === config[1]) {
      if (stack[stack.length - 1] === b) {
        stack.pop()
      } else {
        stack.push(b)
      }
      return true
    }
    
    if (config[1] === b) {
      if (stack[stack.length - 1] !== config[0]) return false
      stack.pop()
      return true
    }
    stack.push(b)
    return true
  })
  console.log(valid, stack)
  return valid && stack.length === 0
}
