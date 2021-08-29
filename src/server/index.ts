import express, { Express, Router } from "express";
export * from './router-config'

export class AppServer {
  private app: Express;
  constructor(private port: number) {
    this.app = express();
    Object.setPrototypeOf(this, AppServer.prototype);
  }

  addMiddlewares(...args:any[]) {
    for (const arg of args) {
      this.app.use(arg);
    }
  }
  register(router: ()=>void, path: string = "/api") {
    this.app.use(path, router);
  }

  setJsonBodyParser(){
    this.app.use(express.json())
  }

  start(callback: () => void = this.defaultCallBack) {
    this.app.listen(this.port, callback);
  }
  private defaultCallBack() {
    console.log(`Server running on ${this.port}`);
  }

}

