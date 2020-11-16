const calculate = (expression) => {
  const regexp = /([\d]+.?[\d]*)?([-+*/][\d]+.?[\d]*)/g;
  const matched = regexp.test(expression);

  if (!matched) {
    return 0;
  }

  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new Error('Cannot start the expression with invalid operators')
    }
  }

  if (/=.+$/.test(expression)) {
    return;
  }

  return new Function(`return ${expression}`)()
}

export default calculate;