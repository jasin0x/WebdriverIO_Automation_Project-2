class articlePage{


    get topicElements(){
        return $$(".article-item")
    }

    get cancelButton(){
        return $(".cancel-button")
    }

    get articleText(){
        return $("#modal-content")
    }

    get stars(){
        return $$("//div[@class='rating']/span")
    }

    get ratingText(){
        return $(".rating-message")
    }


}

export default new articlePage()