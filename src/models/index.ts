import { Models } from "@rematch/core";
import { task } from "./task";

export interface RootModel extends Models<RootModel> {
  task: typeof task;
}

export const models: RootModel = { task };
