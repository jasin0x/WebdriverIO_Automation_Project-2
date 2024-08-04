import { promises as fs } from 'fs';

let data = await fs.readFile('loginCredentials.json','utf-8')
let loginCredentials = JSON.parse(data)

describe('Login Data from JSON file', () => {
  for (const loginCredential of loginCredentials) {
    it(`testing with ${loginCredential.username}`, async () => {
      console.log("===",loginCredential.message)
    })
  }
})