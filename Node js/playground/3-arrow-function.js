// Goal: create a method to get incomplete task
// 
// 1. Define getTasksToDo method
// 2. Use filter to return just the incomplted task tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film Course',
        completed: false

    }],
    getTasksToDo(){
        return this.tasks.filter((task) => task.completed === false) 
    }
}
console.log(tasks.getTasksToDo())