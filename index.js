const apiKey = "fb4995794d294acc8160f9cd54993ab4";
const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        //console.log(data);
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

async function fetchNewsQuery(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching news by query", error);
        return [];
    }
}

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.articles) {
            throw new Error('Articles not found in response');
        }
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = '';
    if (!articles || articles.length === 0) {
        blogContainer.innerHTML = '<p>No articles found.</p>';
        return;
    }
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage || 'https://via.placeholder.com/280x180?text=No+Image';
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDes = article.description && article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description;
        description.textContent = truncatedDes || "No description available";
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
    });
}

searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if (query !== "") {
        try {
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        } catch (error) {
            console.log("Error fetching news by query", error);
        }
    }
});

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();
