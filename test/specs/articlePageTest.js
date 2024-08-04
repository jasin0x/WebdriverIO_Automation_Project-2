import articlePage from "../pageobjects/article.page.js"

describe("Verifying the links of the articles", () => {


    const articleContent = [
        { "content": "Details about Finans topic." },
        { "content": "Details about Policy topic." },
        { "content": "Details about Fintech topic." },
        { "content": "Details about Recharge topic." },
        { "content": "Details about Wind topic." },
        { "content": "Details about Energy topic." },
        { "content": "Details about Hydrogen topic." }
    ]

    let i = 0
    for (const article of articleContent) {
        it(`testing with ${article.content}`, async () => {
            await browser.url("https://article-nomanib-cefalo.netlify.app/")
            await articlePage.topicElements[i].click()
            i = i + 1
            await expect(articlePage.articleText).toHaveText(article.content);
            await articlePage.cancelButton.click();


            // try{
            //     await expect(articlePage.articleText).toHaveText(article.content);
            // }catch(error){
            //     console.log("test failed for===> ",article.content)
            // }

            // const cancelButtonDisplayed = await articlePage.cancelButton.isDisplayed();
            // if (cancelButtonDisplayed) {
            //     await expect(articlePage.articleText).toHaveText(article.content);
            //     await articlePage.cancelButton.click();
            // }
            // i = i + 1
        })


        // it('should perform soft assertions in a loop', async () => {
        //     // Sample articleContent array
        //     const articleContent = [
        //         { "content": "Details about Finans topic." },
        //         { "content": "Details about Policy topic." },
        //         { "content": "Details about Fintech topic."},
        //         { "content": "Details about Recharge topic." },
        //         { "content": "Details about Wind topic." },
        //         { "content": "Details about Energy topic." },
        //         { "content": "Details about Hydrogen topic." }
        //     ]

        //     const errors = [];

        //     for (let i = 0; i < articleContent.length; i++) {
        //         try {
        //             await browser.url('https://article-nomanib-cefalo.netlify.app/');
        //             await articlePage.topicElements[i].click();

        //             const cancelButtonDisplayed = await articlePage.cancelButton.isDisplayed();

        //             if (cancelButtonDisplayed) {
        //                 await expect(articlePage.articleText).toHaveText(articleContent[i].content);
        //                 await articlePage.cancelButton.click();
        //             }
        //         } catch (error) {
        //             errors.push(`Failed assertion for article ${i + 1}: ${error.message}`);
        //         }
        //     }

        //     // Check if there were any errors
        //     if (errors.length > 0) {
        //         throw new Error(`Soft Assertion Errors:\n${errors.join('\n')}`);
        //     }
        // });


    }




    const sratReviews = [
        {"review":"Thanks for rating us 1 star(s)"},
        {"review":"Thanks for rating us 2 star(s)"},
        {"review":"Thanks for rating us 3 star(s)"},
        {"review":"Thanks for rating us 4 star(s)"},
        {"review":"Thanks for rating us 5 star(s)"},
    ]


    let j = 0
    for(const rev of sratReviews){
        it(`testing for ${rev.review}`,async()=>{
            await browser.url("https://article-nomanib-cefalo.netlify.app/")
            await articlePage.stars[j].click()
            j=j+1
            await expect(articlePage.ratingText).toHaveText(rev.review);
        })
    }


    

})