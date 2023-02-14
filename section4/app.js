const petUrls = [
  "https://learnwebcode.github.io/json-example/animals-1.json",
  "https://learnwebcode.github.io/json-example/animals-2.json",
  "https://learnwebcode.github.io/json-example/animals-3.json",
];

const fetchBtn = document.querySelector("#fetch-btn");
const petsInfo = document.querySelector("#pets-info");
let fetchCount = 0;

fetchBtn.addEventListener("click", () => {
  fetch(petUrls[fetchCount])
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pet) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <h2>${pet.name}</h2>
            <p><strong>Species:</strong> ${pet.species}</p>
            <p><strong>Food likes:</strong> ${pet.foods.likes.join(", ")}</p>
            <p><strong>Food dislikes:</strong> ${pet.foods.dislikes.join(
              ", "
            )}</p>
          `;
        petsInfo.appendChild(petCard);
      });
      fetchCount++;
      if (fetchCount === petUrls.length) {
        fetchBtn.style.display = "none";
      }
    })
    .catch((error) => console.log(error));
});
