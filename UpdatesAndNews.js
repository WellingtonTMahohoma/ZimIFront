fetch('UpdatesAndNews.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file");
    }
    return response.json();
  })
  .then(data => {

    const newsGrid = document.getElementById("news-grid");

    const modal = document.getElementById("news-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    // Set section title
    const sectionTitle = document.querySelector(".section-title");
    sectionTitle.textContent = data.container.sectionTitle;

    data.container.newsGrid.forEach(item => {

      const newsItem = document.createElement("div");
      newsItem.className = "news-item";

      newsItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description.substring(0,80)}...</p>
        <a href="#" class="read-more">Read more</a>
      `;

      // Read more click
      newsItem.querySelector(".read-more").addEventListener("click", function(e){
        e.preventDefault();

        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;

        modal.style.display = "block";
      });

      newsGrid.appendChild(newsItem);
    });

    // Close modal
    closeBtn.onclick = function(){
      modal.style.display = "none";
    }

    window.onclick = function(event){
      if(event.target == modal){
        modal.style.display = "none";
      }
    }

  })

  .catch(error => console.error("Error loading JSON:", error));
