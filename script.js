const btnDrawer = document.getElementById("btn-drawer");
const overlayDrawer = document.getElementById("overlay-drawer");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("closeDraw");

btnDrawer.addEventListener("click", () => {
    drawer.classList.add("open");
    overlayDrawer.classList.add("open");
    document.body.style.overflowY = "hidden";
});

closeDrawer.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlayDrawer.classList.remove("open");
    document.body.style.overflowY = "auto";
});

overlayDrawer.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlayDrawer.classList.remove("open");
    document.body.style.overflowY = "auto";
});

const btnModal = document.getElementById("btn-modal");
const overlayModal = document.getElementById("overlay-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeMod");

btnModal.addEventListener("click", () => {
    modal.classList.add("show");
    overlayModal.classList.add("show");
    document.body.style.overflowY = "hidden";
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    overlayModal.classList.remove("show");
    document.body.style.overflowY = "auto";
});

overlayModal.addEventListener("click", () => {
    modal.classList.remove("show");
    overlayModal.classList.remove("show");
    document.body.style.overflowY = "auto";
});

$(document).ready(function () {
    const $thumbnails = $(".gallery-thumbs img");
    const $mainImage = $("#mainProductImage");
    const $prevBtn = $("#prevImage");
    const $nextBtn = $("#nextImage");
    let currentIndex = 0;
    const totalImages = $thumbnails.length;

    if ($thumbnails.length === 0) {
        console.error("Thumbnail rasmlar topilmadi!");
        return;
    }

    $thumbnails.first().addClass("active");

    $thumbnails.on("click", function (e) {
        e.preventDefault();
        const index = parseInt($(this).data("index"));

        if (index !== currentIndex) {
            updateImage(index);
        }
    });

    if ($prevBtn.length) {
        $prevBtn.on("click", function (e) {
            e.preventDefault();
            const newIndex =
                currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
            updateImage(newIndex);
        });
    }

    if ($nextBtn.length) {
        $nextBtn.on("click", function (e) {
            e.preventDefault();
            const newIndex =
                currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
            updateImage(newIndex);
        });
    }

    function updateImage(index) {
        console.log("Rasm o'zgartirilmoqda:", index);

        $thumbnails.removeClass("active");

        $thumbnails.eq(index).addClass("active");

        const newImageSrc =
            $thumbnails.eq(index).data("large") ||
            $thumbnails.eq(index).attr("src");

        $mainImage.fadeOut(200, function () {
            $mainImage.attr("src", newImageSrc).fadeIn(200);
        });

        currentIndex = index;
    }

    $(document).on("keydown", function (e) {
        if ($(".product-gallery").is(":visible")) {
            switch (e.keyCode) {
                case 37:
                    if ($prevBtn.length) $prevBtn.click();
                    break;
                case 39:
                    if ($nextBtn.length) $nextBtn.click();
                    break;
            }
        }
    });

    console.log("Gallery initialized:", { totalImages, currentIndex });
});

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const text = document.getElementById("text");

minusBtn.addEventListener("click", () => {
    let count = +text.innerHTML;
    if (count > 0) {
        text.innerHTML = count - 1;
    }
});

plusBtn.addEventListener("click", () => {
    let count = +text.innerHTML;
    text.innerHTML = count + 1;
});
