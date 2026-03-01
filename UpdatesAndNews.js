fetch('UpdatesAndNews.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file");
    }
    return response.json();
  })
  .then(data => {
    const newsGrid = document.getElementById("news-grid");

    // Optional: Set section title dynamically
    const sectionTitle = document.querySelector(".section-title");
    sectionTitle.textContent = data.container.sectionTitle;

    data.container.newsGrid.forEach(item => {
      const newsItem = document.createElement("div");
      newsItem.className = "news-item";

      newsItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.linkUrl}">${item.linkText}</a>
      `;

      newsGrid.appendChild(newsItem);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));