const cardsDiv = document.querySelector(".cards");
async function getProducts() {
  const response = await fetch("https://fakestoreapi.in/api/products");
  try {
    if (response.ok) {
      const data = await response.json();
      const products = data.products;
      console.log(products[7]);

      products.forEach((product) => {
        // CARD DIV
        const cardDiv = document.createElement("div");
        cardDiv.classList.add(
          "card",
          "border-1",
          "col-xxl-3",
          "col-xl-3",
          "col-lg-3",
          "col-md-4",
          "col-sm-6",
          "d-flex",
          "flex-column",
          "justify-content-between",
          "p-1",
          "mb-5"
        );
        cardDiv.style.width = "222px";
        cardsDiv.appendChild(cardDiv);
        // CARD IMAGE
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.setAttribute("src", product.image);
        cardImage.onerror = function () {
          this.src = "placeholder-image.png";
        };
        cardImage.setAttribute("alt", product.title);
        cardDiv.appendChild(cardImage);
        // CARD BODY
        const cardBody = document.createElement("div");
        cardBody.classList.add(
          "card-body",
          "d-flex",
          "flex-column",
          "p-1",
          "justify-content-between",
          "gap-2"
        );
        cardDiv.appendChild(cardBody);
        // CARD TITLE
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "m-0");
        cardTitle.textContent = product.title.slice(0, 75) + "...";
        cardBody.appendChild(cardTitle);
        // CARD PARAGRAPH
        const cardText = document.createElement("p");
        cardText.classList.add("card-text", "m-0");
        cardText.textContent = product.description.slice(0, 100) + "...";
        cardBody.appendChild(cardText);
        // CARD BUTTON
        const buyNowButton = document.createElement("a");
        buyNowButton.classList.add("btn", "btn-primary");
        buyNowButton.textContent = "Buy Now";
        buyNowButton.setAttribute("href", "#");
        cardBody.appendChild(buyNowButton);
      });
    } else {
      console.log("404");
    }
  } catch (error) {
    console.log(error);
  }
}
getProducts();
