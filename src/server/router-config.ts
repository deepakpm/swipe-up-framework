import express, { Router } from "express";

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export class AppRouter {
  private router: Router;
  private static appRouter: AppRouter;
  constructor() {
    this.router = express.Router();
    Object.setPrototypeOf(this, AppRouter.prototype);
  }

  public static instance() {
    if (!AppRouter.appRouter) {
      AppRouter.appRouter = new AppRouter();
    }
  }
  public registerRouter(
    httpMethod: HttpMethod,
    path: string,
    controller: () => void | {}
  ) {
    switch (httpMethod) {
      case "DELETE":
        this.router.delete(path, controller);
        break;
      case "GET":
        this.router.get(path, controller);
        break;
      case "PATCH":
        this.router.patch(path, controller);
        break;
      case "POST":
        this.router.post(path, controller);
        break;
      case "PUT":
        this.router.put(path, controller);
        break;
      default:
        this.router.get(path, controller);
        break;
    }

    return this.router;
  }
}
