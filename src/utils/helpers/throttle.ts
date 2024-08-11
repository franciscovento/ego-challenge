function throttle<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let inThrottle: number | undefined;

  return function(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = setTimeout(() => {
        inThrottle = undefined;
      }, delay);
    }
  };
}

export {
  throttle
}