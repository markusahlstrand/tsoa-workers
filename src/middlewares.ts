export type Next = () => Promise<Response | undefined>;

export function Middlewares(middleware: any) {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...params: any[]) => Promise<any>>,
  ) => {
    let fn = descriptor.value;
    descriptor.value = async function (...args) {
      return middleware(this, async () => fn.apply(this, arguments));
    };
  };
}
