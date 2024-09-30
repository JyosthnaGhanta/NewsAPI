const apiData = {
    "status": "ok",
    "totalResults": 3933,
    "articles": [
        {
            "source": { "id": "the-irish-times", "name": "The Irish Times" },
            "author": "Gemma Tipton",
            "title": "Slow travel allows you to escape the busy world: Here’s how to do it",
            "description": "Get away from it all by road, rail, ramble or sail in Ireland and farther afield",
            "url": "https://www.irishtimes.com/life-style/travel/2024/09/28/slow-travel-allows-you-to-escape-the-busy-world-from-quiet-cruises-to-mindful-meanders/",
            "urlToImage": "https://www.irishtimes.com/resizer/v2/BSD6STFMUNHHHPCDU2TSRIOWBU.png?smart=true&auth=7d1802e284241420bd3fb22651a86ffdce3e86d6fcccb6d6319caa8d28907755&width=1200&height=630",
            "publishedAt": "2024-09-30T04:00:00Z",
            "content": "Does the idea of switching off your phone, opting out of social media, and leaving your bucket list in the back of a drawer fill you with hope or dismay?"
        },
        {
            "source": { "id": null, "name": "The Daily Dot" },
            "author": "Mars Ramos",
            "title": "‘I know somebody who has a Kia and is paying $550’: Driver buys 2023 Mercedes Benz. Viewers can’t believe how much her car note is",
            "description": "When getting a new car, there are a lot of factors that make up your car note.",
            "url": "https://www.dailydot.com/news/mercedes-benz-car-note/",
            "urlToImage": "https://uploads.dailydot.com/2024/09/Car-note-Benz.jpg?auto=compress&fm=pjpg",
            "publishedAt": "2024-09-30T04:00:00Z",
            "content": "When getting a new car, there are a lot of factors that make up your car note."
        },
        {
            "source": { "id": null, "name": "New York Post" },
            "author": "David Propper",
            "title": "Tesla erupts into flames inside flooded Florida garage following Hurricane Helene: scary video",
            "description": "The hurricane, which delivered deadly winds and rainfall, devastated the region.",
            "url": "https://nypost.com/2024/09/29/us-news/tesla-erupts-into-flames-inside-flooded-fla-garage-following-hurricane-helene-video/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/https-www-facebook-com-pinellasgov-90703282.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-09-30T03:57:21Z",
            "content": "A Tesla burst into flames inside a Florida garage flooded with saltwater."
        },
        {
            "source": { "id": null, "name": "Slashdot.org" },
            "author": "EditorDavid",
            "title": "67% of American Tech Workers Interested In Joining a Union",
            "description": "Long-time Slashdot reader AsylumWraith writes: Visual Capitalist has posted an article and graph showing that, on average, 67% of US tech workers would be interested in joining a union.",
            "url": "https://it.slashdot.org/story/24/09/29/176258/67-of-american-tech-workers-interested-in-joining-a-union",
            "urlToImage": "https://a.fsdn.com/sd/topics/it_64.png",
            "publishedAt": "2024-09-29T17:34:00Z",
            "content": "I've worked in tech my entire career but I also despise unions."
        },
        {
            "source": { "id": null, "name": "Biztoc.com" },
            "author": "news.google.com",
            "title": "September jobs report, port strike: What to watch next week",
            "description": "September jobs report, port strike: What to watch next week Yahoo Finance.",
            "url": "https://biztoc.com/x/e68231efef9f1b73",
            "urlToImage": "https://biztoc.com/cdn/802/og.png",
            "publishedAt": "2024-09-29T17:22:20Z",
            "content": "September jobs report, port strike: What to watch next week Yahoo Finance."
        },
        {
            "source": { "id": null, "name": "Yahoo Entertainment" },
            "author": "Usman Kabir",
            "title": "ASML Holding N.V. (ASML) Faces Export Restrictions and UBS Downgrade Amid Rising Tensions with China Over Semiconductor Policies",
            "description": "We recently compiled a list of the 20 AI News That Broke The Internet This Month.",
            "url": "https://finance.yahoo.com/news/asml-holding-n-v-asml-171753569.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-29T17:17:53Z",
            "content": "We recently compiled a list of the 20 AI News That Broke The Internet This Month."
        },
        {
            "source": { "id": "bloomberg", "name": "Bloomberg" },
            "author": null,
            "title": "Chinese Stocks Soar Most Since 2015, Heading for Bull Market - Bloomberg",
            "description": "Chinese stocks extended one of their most remarkable turnarounds in history.",
            "url": "https://www.bloomberg.com/news/articles/2024-09-30/chinese-stocks-head-for-bull-market-as-property-rescue-deepens",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLuwHFi3j_1Y/v0/1200x800.jpg",
            "publishedAt": "2024-09-30T01:35:00Z",
            "content": "Chinese stocks extended one of their most remarkable turnarounds in history."
        }
    ]
};

function displayBlogs(articles) {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = '';

    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage || 'https://via.placeholder.com/280x180?text=No+Image';
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        const description = document.createElement("p");
        description.textContent = article.description && article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description || "No description available";
        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    });
}
displayBlogs(apiData.articles);
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", () => {
    const query = searchField.value.trim();
    if (query) {
        const filteredArticles = apiData.articles.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) || 
            article.description.toLowerCase().includes(query.toLowerCase())
        );
        displayBlogs(filteredArticles);
    }
});
