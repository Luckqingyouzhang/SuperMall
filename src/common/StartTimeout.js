export function StartTimeout (time) {
  return timer = setInterval(() => {
    clearInterval(timer)
  }, time);
}