export class Controller {
  private statusCode?: number;
  private headers: any;

  setStatus(statusCode: number) {
    this.statusCode = statusCode;
  }

  getStatus() {
    return this.statusCode;
  }

  setHeader(name: string, value: string) {
    this.headers[name] = value;
  }

  getHeader(name: string) {
    return this.headers[name];
  }

  getHeaders() {
    return this.headers;
  }
}
