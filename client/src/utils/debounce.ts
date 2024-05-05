type debounceFunc = (...args: any) => any | void;

export function debounce(callBack: debounceFunc, delay: number) {
  let timeout: number | undefined;
  // @ts-ignore
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBack(...(args as []));
    }, delay);
  };
}
