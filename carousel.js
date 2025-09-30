const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carouselContent = document.querySelector(".testimonials-content");

const testimonials = [
    {
        quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        name: "Robert Fox",
        role: "Customer",
        image: "./images/testi-im1.png",
    },
    {
        quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        name: "Dianne Russell",
        role: "Customer",
        image: "./images/testi-im2.png",
    },
    {
        quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        name: "Eleanor Pena",
        role: "Customer",
        image: "./images/testi-im3.png",
    },
    {
        quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        name: "John Doe",
        role: "Customer",
        image: "./images/testi-im2.png",
    },
    {
        quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        name: "Mark Rui",
        role: "Customer",
        image: "./images/testi-im3.png",
    },
];

let currentIndex = 0;

const testimonialCards = testimonials.map((item) => {
    const card = document.createElement("div");
    card.classList.add("testimonials-content-card");

    const p = document.createElement("p");
    p.textContent = item.quote;

    const bottom = document.createElement("div");
    bottom.classList.add("testimonials-content-card-bottom");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const h2 = document.createElement("h2");
    h2.innerHTML = `${item.name} <br><span>${item.role}</span>`;

    bottom.appendChild(img);
    bottom.appendChild(h2);

    card.appendChild(p);
    card.appendChild(bottom);

    return card;
});

testimonialCards.forEach((card) => carouselContent.appendChild(card));

next.addEventListener("click", () => {
    if (currentIndex < testimonials.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    carouselContent.style.transform = `translateX(-${
        currentIndex * (100 / 3)
    }%)`;
});

prev.addEventListener("click", () => {
    if (currentIndex <= 0) {
        currentIndex = testimonials.length - 3;
    } else {
        currentIndex--;
    }
    carouselContent.style.transform = `translateX(-${
        currentIndex * (100 / 3)
    }%)`;
});
