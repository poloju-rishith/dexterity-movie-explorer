/**
 * Takes in a function and a delay as parameter and returns a
 * function that executes after the specified delay.
 * If that function is called again within the delay. The previous
 * call will be discarded.
 *
 * @param fn Function to be debounced
 * @param delay Time delay before the function executes.
 * @returns Debounced function
 */
const debounce = (fn: Function, delay: number) => {
  let timeoutId: number | null

  return (...args: any) => {
    /**
     * If function is called again before the delay elapsed.
     * Cancelling the previous function call.
     */
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }
}

export default debounce
