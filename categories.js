const categories = [
    { src: "./images/categories/categories-fruit.png", text: "Fresh Fruit" },
    {
        src: "./images/categories/categories-vegetables.png",
        text: "Fresh Vegetables",
    },
    {
        src: "./images/categories/categories-meat-fish.png",
        text: "Meat & Fish",
    },
    { src: "./images/categories/categories-snacks.png", text: "Snacks" },
    { src: "./images/categories/categories-beverages.png", text: "Beverages" },
    {
        src: "./images/categories/categories-health.png",
        text: "Beauty & Health",
    },
    {
        src: "./images/categories/categories-bakery.png",
        text: "Bread & Bakery",
    },
    {
        src: "./images/categories/categories-baking-needs.png",
        text: "Baking Needs",
    },
    { src: "./images/categories/categories-cooking.png", text: "Cooking" },
    {
        src: "./images/categories/categories-diabetic.png",
        text: "Diabetic Food",
    },
    {
        src: "./images/categories/categories-dish.png",
        text: "Dish Detergents",
    },
    { src: "./images/categories/categories-oil.png", text: "Oil" },
];

const container = document.querySelector(".categories-content");

categories
    .map((item) => {
        const card = document.createElement("div");
        card.classList.add("categories-content-card");
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.text;
        const h2 = document.createElement("h2");
        h2.textContent = item.text;
        card.appendChild(img);
        card.appendChild(h2);

        return card;
    })
    .forEach((card) => container.appendChild(card));
