export class HttpRoute {
  path: string;
  verb: string;
  method: string;

  constructor(path: string, verb: string, method: string) {
    this.path = path;
    this.verb = verb;
    this.method = method;
  }
}
