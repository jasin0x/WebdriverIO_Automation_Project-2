import { promises as fs } from 'fs';


const loginInfos = await fs.readFile("loginCredentials.json", "utf-8")
const loginInfosAfterParse = JSON.parse(loginInfos)

describe("Parameterized testing", () => {

    for (let loginInfo of loginInfosAfterParse) {
        it(`testing with ${loginInfo.username}`, async () => {
            console.log(loginInfo.message)
        })
    }

})