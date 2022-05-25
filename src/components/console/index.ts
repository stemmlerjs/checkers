

import { eventObserver } from "../../shared/infra/observer";
import { Console } from "./Console";

const c = new Console(eventObserver);

export {
  c
}