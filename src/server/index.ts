import express, { Express, Router } from "express";

export class AppServer {
  private app: Express;
  constructor(private port: number) {
    this.app = express();
  }

  addMiddlewares(...args: []) {
    for (const arg of args) {
      this.app.use(arg);
    }
  }

  register(router: Router, path: string = "/api") {
    this.app.use(path, router);
  }

  start(callback: () => void = this.defaultCallBack) {
    this.app.listen(this.port, callback);
  }
  private defaultCallBack() {
    console.log(`Server running on ${this.port}`);
  }
  
}
