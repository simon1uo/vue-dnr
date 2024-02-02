export function handleCalculate({ arg1, arg2 }: {
  arg1: number
  arg2: number
}): void {
  const result = arg1 + arg2

  // eslint-disable-next-line no-console
  console.log(`${result}`)
}
