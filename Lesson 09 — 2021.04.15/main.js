// Вам нужно создать список задач, который умеет:
//
//     • добавлять новые задачи и проверять их уникальность. У каждой задачи есть статус (boolean), название и текст.
//     • удалять задачу
//     • редактировать задачу
//     • выводить общее количество задач, сколько выполнили и сколько осталось в виде объекта
//
// Вам нужно оформить это, как объект с методами

TODOList = {
    tasks: {},
    addTask (taskName, taskDescription = "") {
        if(taskName in this.tasks) return false;
        this.tasks[taskName] = {
            taskDescription: taskDescription,
            taskDone: false
        };
        return true;
    },
    deleteTask(taskName) {
        if(!(taskName in this.tasks)) return false;
        delete this.tasks[taskName];
        return true;
    },
    editTask(taskName, taskDescription = null, taskDone = null) {
        if(taskDescription) this.tasks[taskName].taskDescription = taskDescription;
        if(taskDone) this.tasks[taskName].taskDone = taskDone;
        return true;
    },
    displayFullInfo () {
        let resSets = [];
        for (const [taskName, task] of Object.entries(this.tasks)) {
            let taskInfo = `• ${taskName}: ${task.taskDescription} | ${task.taskDone}`;
            resSets.push(taskInfo);
        }
        let resStr = resSets.join("\n");
        console.log(resStr);
        return resStr;
    }
}

todo = TODOList

console.log("[Task added]")
todo.addTask("Hillel", "Finish Hillel's Lesson 9")
todo.displayFullInfo()

console.log("\n[Task edited]")
todo.editTask("Hillel", "Finish Hillel's Lesson 9 until 19:00", true)
todo.displayFullInfo()

console.log("\n[Task added]")
todo.addTask("Univer", "Do DB homework")
todo.displayFullInfo()

console.log("\n[Task delete]")
todo.deleteTask("Hillel")
todo.displayFullInfo()
