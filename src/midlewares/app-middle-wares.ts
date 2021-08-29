import helmet from "helmet";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";

export class AppMiddlewares {
  static useCors(options?: CorsOptions) {
    return cors(options);
  }
  static useHelmet() {
    return helmet();
  }
  static useLogger() {
    return morgan("combined");
  }
}
