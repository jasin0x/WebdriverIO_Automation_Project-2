import demoPlaywrightPage from "../pageobjects/demoPlaywright.page.js";
import utilities from "../utilities/utilities.js";

describe("Testing demoPlaywright plage", () => {

    var tasks;
    let completeTask;
    it("Verify that user is able to navigate to desired page", async () => {
        await demoPlaywrightPage.goToDemoPage()
        await expect(browser).toHaveTitle("React • TodoMVC")
    })

    it("Verify that tasks are added to the ToDo list", async () => {
        tasks = ["Wakeup", "Pray", "Run", "Eat", "Work"]
        await demoPlaywrightPage.addingTask_intheList(tasks)

        for (let i = 0; i < tasks.length; i++) {
            await expect(await demoPlaywrightPage.allTasks[i].getText()).toEqual(tasks[i], { message: "Task were not added"})
        }
    })

    it("verify that task can be deleted", async () => {
        await demoPlaywrightPage.allTasks[tasks.length - 1].moveTo()
        await demoPlaywrightPage.deleteTaks[tasks.length - 1].waitForDisplayed({ timeout: 3000 })
        await demoPlaywrightPage.deleteTaks[tasks.length - 1].click()
        await expect(await demoPlaywrightPage.allTasks.length).toBe(4, { message: "Task cannot be deleted"})
    })

    it("Verify that user is able to mark task as complete", async () => {
        completeTask = ["Pray", "Run"]
        await demoPlaywrightPage.markTaskComplete(completeTask)
        await demoPlaywrightPage.completedTaskList.click()
        await expect(await demoPlaywrightPage.allTasks.length).toBe(2, { message: "Task cannot be marked complete"})
    })

    it("Verify that user is able to see the active tasks", async () => {
        await demoPlaywrightPage.activeTaskList.click()
        await expect(await demoPlaywrightPage.allTasks.length).toBe(2, { message: "User is unable to see active tasks"})
    })

    it("Verify that user is able to see only the active tasks after clearing the active tasks", async () => {
        await demoPlaywrightPage.clearTasks.click()
        await demoPlaywrightPage.all.click()
        await expect(await demoPlaywrightPage.allTasks.length).toBe(2, { message: "User is unable to see active tasks"})
    })


})