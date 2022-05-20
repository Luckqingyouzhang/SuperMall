//防抖 操作  
export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    // 如果timer 有值清掉之前的定时器 
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)

  }
}