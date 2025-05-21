export type Task = {
  id: string;
  userId: string;
  title: string;
  summary:string;
  dueDate: string;
  completed?: boolean;
}

export type NewTask = Pick<Task, "title" | "summary" | "dueDate">;