import practicePage from "../pageobjects/practice.page.js";

describe("Testing various web elements", () => {

    before(async () => {
        await practicePage.goToTestPage()
        // await browser.execute(() => {
        //     document.body.style.zoom = '0.67';
        // });

    })

    it("Verify that user has landed on the page", async () => {
        await expect(browser).toHaveTitle("Playwright Practice Page")
    })

    it("Verify that user can register with proper credentilas", async () => {
        await practicePage.registerAccountWithCredentials()
        await practicePage.regestrationSuccessMessage.waitForDisplayed({ timeout: 3000 })
        const successText = await practicePage.regestrationSuccessMessage.getText()
        await expect(successText).toContain("submitted successfully")
    })

    it("Verify if the specila message is displayed after clicking on the special button", async () => {
        await practicePage.specialButton.click()
        await practicePage.specialMessage.waitForDisplayed({ timeout: 3000 })
    })

    it("Verify that the checkbox is unselected by default", async () => {
        await expect(practicePage.checkBox).not.toBeSelected()
    })

    it("Verify that the checkbox is selected after click", async() => {
        await practicePage.checkBox.click()
        await expect(practicePage.checkBox).toBeSelected()
    })

    it("Verify if the radio button is clickable",async()=>{
        await practicePage.radioButton.click()
        await expect(practicePage.radioBtnMessage).toBeDisplayed({wait: 3000})
    })

    it("Verify if the user can select desired option from the dropdown",async()=>{
        await practicePage.dropDown.selectByVisibleText("Option 3")
        await expect(practicePage.dropDown).toHaveValue("Option 3")
    })

    it("verify that the image can be clicked",async()=>{
        await practicePage.imageElement.scrollIntoView()
        await practicePage.imageElement.click()
        await expect(practicePage.imageMessage).toBeDisplayed()
    })

    it("Verify that the about cefalo button is clickable",async()=>{
        await expect(practicePage.aboutCefaloButton).toBeClickable()
    })

    it("Verify that after clicking about cefalo button, user is taken to the cefalo home page",async()=>{
        await practicePage.aboutCefaloButton.click()
        await expect(browser).toHaveUrl("https://www.cefalo.com/en/about-us")
    })

})