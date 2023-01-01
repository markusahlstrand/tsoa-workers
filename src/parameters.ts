/**
 * Inject http Body
 *  @param {string} [name] properties name in body object
 */
export function Body() {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject value from body
 *
 * @param {string} [name] The name of the body parameter
 */
export function BodyProp(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject http request
 */
export function Request() {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject value from Path
 *
 * @param {string} [name] The name of the path parameter
 */
export function Path(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject value from query string
 *
 * @param {string} [name] The name of the query parameter
 */
export function Query(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject value from Http header
 *
 * @param {string} [name] The name of the header parameter
 */
export function Header(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Mark parameter as manually injected, which will not be generated
 */
export function Inject() {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject uploaded file
 *
 * @param {string} [name] The name of the uploaded file parameter
 */
export function UploadedFile(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject uploaded files
 *
 * @param {string} [name] The name of the uploaded files parameter
 */
export function UploadedFiles(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Inject uploaded files
 *
 * @param {string} [name] The name of the uploaded files parameter
 */
export function FormField(name?: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}

/**
 * Overrides the default media type of request body.
 * Can be used on specific method.
 * Can't be used on controller level.
 *
 * @link https://swagger.io/docs/specification/describing-request-body/
 */
export function Consumes(value: string) {
  return function (target: any, propertyKey: string, value: string | number) {};
}
