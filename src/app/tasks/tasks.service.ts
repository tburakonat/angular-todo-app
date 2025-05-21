import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask, Task } from "./task/task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
    private tasks: Task[] = DUMMY_TASKS;

    constructor() {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addUserTask(newTask: NewTask, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId,
            ...newTask, 
        });
        this.saveTasks();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}
