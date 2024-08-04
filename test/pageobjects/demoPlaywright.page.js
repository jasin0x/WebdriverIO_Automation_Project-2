class demoPlaywright {

    get addTaskField() {
        return $(".new-todo")
    }

    get allTasks() {
        return $$("//label[@data-testid='todo-title']")
    }

    get deleteTaks() {
        return $$(".destroy")
    }

    get toggleCheckbox() {
        return $$("//div/input[@type='checkbox']")
    }

    get completedTaskList() {
        return $("//a[normalize-space()='Completed']")
    }

    get activeTaskList(){
        return $("a[href='#/active']")
    }

    get clearTasks(){
        return $(".clear-completed")
    }

    get all(){
        return $("//a[text()='All']")
    }



    async goToDemoPage() {
        await browser.url("https://demo.playwright.dev/todomvc/#/")
    }

    async addingTask_intheList(tasks) {
        for (const task of tasks) {
            await this.addTaskField.setValue(task)
            await browser.keys('Enter');
        }
    }

    //wanted to mark task complete dynamicaly from an array which contains the name of the task are supposed to be done. 
    async markTaskComplete(completeTask){
        // for(let i=0; i<this.allTasks.length; i++){
        //     for(let j=0; j<completeTask.length;j++){
        //         if(await this.allTasks[i].getText()== completeTask[j]){
        //             await this.toggleCheckbox[i].moveTo()
        //             await this.toggleCheckbox[i].click()
        //         }
        //     }
        // }

        await $("//li[2]//div[1]//input[1]").click()
        await $("//li[3]//div[1]//input[1]").click()
    }



}

export default new demoPlaywright()
