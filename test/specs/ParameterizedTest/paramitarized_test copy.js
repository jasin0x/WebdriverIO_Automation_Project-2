
import { promises as fs } from 'fs';

// const loginInfos = fs.readFile('loginCredentials.json', 'utf-8')
// const loginInfosAfterParse = JSON.parse(loginInfos)

const sauceInfos = await fs.readFile('loginCredentials.json', 'utf-8')
const sauceInfosAfterParse = JSON.parse(sauceInfos)

describe("Parameterized testing", () => {


    // for (const loginInfo of loginInfosAfterParse) {
    //     it(`testing with ${loginInfo.username}`, async () => {
    //         console.log(loginInfo.message)
    //     })
    // }


    for(const sauceInfo of sauceInfosAfterParse){
        it(`sauce login test: ${sauceInfo.username}`, async()=>{
            await browser.url("https://www.saucedemo.com/")

            const userNameField = await $("#user-name")
            const passwordField = await $("#password")
            const loginButon = await $("#login-button")
            
            await userNameField.setValue(sauceInfo.username)
            await passwordField.setValue(sauceInfo.password)
            await loginButon.click()
            await browser.pause(3000)

        })
    }



})