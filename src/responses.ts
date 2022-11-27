/**
 * Checks for a supported header type
 * key types can be `number` to support string indexed access types
 */
export declare type IsValidHeader<Header> = keyof Header extends string | number
  ? Header[keyof Header] extends string | string[] | undefined
    ? {}
    : "Header values must be string or string[]"
  : "Header names must be of type string";

export function SuccessResponse<
  HeaderType extends IsValidHeader<HeaderType> = {}
>(name: string | number, description?: string, produces?: string | string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {};
}

export function Response<HeaderType extends IsValidHeader<HeaderType> = {}>(
  name: string | number,
  description?: string,
  produces?: string | string[]
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {};
}
