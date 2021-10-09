import { createModel } from "@rematch/core";
import { format } from "date-fns";
import { RootModel } from "./";

const dateTimeFormat: string = 'dd.MM.yyyy hh:mm:ss';

export enum Status {
  InProgress = 0,
  Completed
};

export interface Task {
  startTime?: string,
  endTime?: string,  
  description?: string,
  status: Status
};

export const task = createModel<RootModel>()({
  state: [] as Task[],
  reducers: {
    started(state: Task[], description: string): Task[] {
      const updatedState: Task[] = [...state];
      const task: Task = {
        startTime: format(new Date(), dateTimeFormat),
        description,
        status: Status.InProgress
      };
      updatedState.push(task);
      return updatedState;
    },
    ended(state: Task[]): Task[] {
      const updatedState: Task[] = [...state];
      const task: Task = updatedState.pop() as Task;
      task.endTime = format(new Date(), dateTimeFormat);
      task.status = Status.Completed;
      updatedState.push(task);
      return updatedState;
    },
  },
});
