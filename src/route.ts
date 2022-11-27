export function Route(path: string) {
  return (target: Function) => {};
}

/**
 * can be used to entirely hide an method from documentation
 */
export function Hidden() {
  return () => {
    return;
  };
}
