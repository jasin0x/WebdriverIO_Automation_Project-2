import * as faker from '@ngneat/falso';

class practicePage{

    get pageHeading(){
        return $("//h2[text()='Form Example']")
    }

    get userNameField(){
        return $("#username")
    }

    get emailField(){
        return $("//input[@placeholder='Enter your email']")
    }

    get passwordField(){
        return $("#password")
    }

    get submitButton(){
        return $("//button[@title='Submit Button']")
    }

    get regestrationSuccessMessage(){
        return $("#success-message")
    }

    get specialButton(){
        return $("//button[@data-testid='special-button']")
    }

    get specialMessage(){
        return $("#special-message")
    }

    get checkBox(){
        return $("//input[@type='checkbox']")
    }

    get checkBoxMessage(){
        return $("#checkbox-message")
    }

    get radioButton(){
        return $("//input[@name='radio-group']")
    }

    get radioBtnMessage(){
        return $("#radio-message")
    }

    get dropDown(){
        return $("#dropdown")
    }

    get textToVerify(){
        return $("//p[contains(text(),'I am a text to verify')]")
    }

    get imageElement(){
        return $("//img[@alt='Placeholder Image']")
    }

    get imageMessage(){
        return $("#image-message")
    }

    get aboutCefaloButton(){
        return $("//a[text()='About Cefalo']")
    }




    async goToTestPage(){
        await browser.url("https://playwright-practice.netlify.app/")
    }

    async registerAccountWithCredentials(){
        await this.userNameField.setValue(faker.randFirstName())
        await this.emailField.setValue(faker.randEmail())
        await this.passwordField.setValue(faker.randPassword())
        await this.submitButton.click()
    }



}

export default new practicePage()