class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLocaleLowerCase();
        let article = this.listOfArticles.find(a => a.articleName == articleName);
        if (this.possibleArticles[articleModel] == undefined) throw new Error(`This article model is not included in this gallery!`);
        if (article && article.articleModel == articleModel) {
            article.quantity++;
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
        this.listOfArticles.push({ articleModel, articleName, quantity });
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g.guestName == guestName)) throw new Error(`${guestName} has already been invited.`);
        let pointsTable = { 'Vip': 500, 'Middle': 250, 'Normal': 50 };
        let points = pointsTable[personality];
        points == undefined ? points = 50 : points = pointsTable[personality];
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let foundArticle = this.listOfArticles.find(a => a.articleName == articleName && a.articleModel == articleModel);
        let guest = this.guests.find(g => g.guestName == guestName);
        if (!foundArticle || this.possibleArticles[articleModel] == undefined) throw new Error("This article is not found.");
        if (foundArticle.quantity == 0) return `The ${articleName} is not available.`;
        if (!guest) return `This guest is not invited.`;
        if (guest.points < this.possibleArticles[foundArticle.articleModel]) return `You need to more points to purchase the article.`;
        guest.points -= this.possibleArticles[foundArticle.articleModel];
        guest.purchaseArticle++;
        foundArticle.quantity--;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[foundArticle.articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let articleInfo = ["Articles information:"];
        let guestInfo = ["Guests information:"];
        this.listOfArticles.forEach(a => articleInfo.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        this.guests.forEach(g => guestInfo.push(`${g.guestName} - ${g.purchaseArticle}`));
        if (criteria == 'article') return articleInfo.join('\n');
        if (criteria == 'guest') return guestInfo.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
