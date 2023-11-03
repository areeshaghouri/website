// Sample data for product titles and descriptions
const products = [
    {
        title: "Albert Einstein",
        description: "We cannot solve our problems with the same thinking we used when we created them."},
    {
        title: "Albert Einstein",
        description: "align-items:flex-endA person who never made a mistake never tried anything new"},
    {
        title: "Albert Einstein",
        description: " Add resistance to your workouts with this red and white resistance band. Strengthen and tone various muscle groups with its portable and durable design."
    },
    {
        title: "Albert Einstein",
        description: "human stupidity, and I'm not sure about the former"
    },
    {
        title: "Albert Einstein",
        description: " Only two things are infinite, the universe and human stupidity, and I'm not sure about the former"},
    {
        title: "Albert Einstein",
        description: "The only source of knowledge is experience"
    }, {
        title: "Albert Einstein",
        description: "Anyone who has never made a mistake has never tried anything new"
    }, {
        title: "Albert Einstein",
        description: "Great spirits have always encountered violent opposition from mediocre minds"
    }, {
        title: "Albert Einstein",
        description: "Stay active indoors with this treadmill. Its customizable settings and cushioned surface offer an effective and joint-friendly cardio experience."
    }, {
        title: "Albert Einstein",
        description: "There are two ways to live: you can live as if nothing is a miracle; you can live as if everything is a miracle."}, {
        title: "Albert Einstein",
        description: "Nationalism is an infantile disease. It is the measles of mankind."}, {
        title: "Albert Einstein",
        description: "I never think of the future - it comes soon enough"
    }, {
        title: "Albert Einstein",
        description: "Protect your hands and improve your grip with these gym gloves. Their breathable design and padded palms enhance comfort during weightlifting and other exercises."
    }, {
        title: "Albert Einstein",
        description: "If you are out to describe the truth, leave elegance to the tailor"}, {
        title: "Albert Einstein",
        description: " The hardest thing to understand in the world is the income tax"}, {
        title: "Albert Einstein",
        description: "A table, a chair, a bowl of fruit and a violin; what else does a man need to be happy"
    }, {
        title: "Albert Einstein",
        description: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones."}, {
        title: "Albert Einstein",
        description: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe"}, {
        title: "Push-Up Bars",
        description: " Take your push-ups to the next level with these push-up bars. Their ergonomic design reduces wrist strain and helps you achieve deeper push-up movements."
    }, {
        title: "Albert Einstein",
        description: " Imagination is everything. It is the preview of life's coming attractions."},
];

function handleCardClick(imageSrc, title) {
    console.log("Clicked title:", title);

    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");

    const product = products.find(product => {
        console.log("Product title:", product.title);
        return product.title === title;
    });

    modalImage.src = imageSrc;
    modalDescription.innerHTML = product ? product.description : "No description available.";

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".product-image").src;
            const title = card.querySelector(".card-title").textContent;
            console.log("Clicked title:", title); // Check the extracted title
            handleCardClick(imageSrc, title);
        });
    });
    
});
