const renderCampaigns = (campaigns) => {
  const campaignContainer = document.querySelector(
    "#carousel-campaigns .carousel-inner"
  );
  const indicatorsContainer = document.querySelector(
    "#carousel-campaigns .carousel-indicators"
  );
  let html = "";
  let indicatorsHtml = "";
  campaigns.forEach((campaign, index) => {
    console.log(campaign.picture);
    const activeClass = index === 0 ? "active" : "";
    html += `
      <div class="carousel-item ${activeClass}">
        <img class="d-block w-100" src="${campaign.picture}" alt="${campaign.story}" height="500px" width:"200px">
        <div class="carousel-caption d-none d-md-block">
          <h5>${campaign.story}</h5>
        </div>
      </div>
    `;
    indicatorsHtml += `
      <button type="button" data-bs-target="#carousel-campaigns" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${
      activeClass === "active" ? "true" : "false"
    }" aria-label="Slide ${index + 1}"></button>
    `;
  });
  campaignContainer.innerHTML = html;
  indicatorsContainer.innerHTML = indicatorsHtml;

  const carousel = new bootstrap.Carousel(
    document.querySelector("#carousel-campaigns")
  );

  // Add event listeners to next and previous buttons
  const nextButton = document.querySelector(
    "#carousel-campaigns .carousel-control-next"
  );
  const prevButton = document.querySelector(
    "#carousel-campaigns .carousel-control-prev"
  );
  nextButton.addEventListener("click", () => {
    carousel.next();
  });
  prevButton.addEventListener("click", () => {
    carousel.prev();
  });
};

// Fetch campaigns data and render carousel
axios
  .get("http://52.194.142.24/api/1.0/marketing/campaigns")
  .then((response) => {
    const campaigns = response.data.data;
    renderCampaigns(campaigns);
  })
  .catch((error) => {
    console.error(error);
  });
