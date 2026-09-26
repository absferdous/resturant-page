import { container } from "./home";

export function renderMenu() {
  const heroText = document.createElement("h2");
  heroText.classList.add("herotext");
  heroText.textContent = "This is the Menu page";

  const heroWrapper = document.createElement("div");
  heroWrapper.classList.add = "heroWrapper";
  const heroNormaltext = document.createElement("p");
  heroNormaltext.classList.add("heroNormaltext");
  heroNormaltext.textContent =
    "Experience the vibrant flavors and rich culinary heritage of India right at your table. At our restaurant, every dish tells a story—crafted with authentic spices, fresh ingredients, and time-honored recipes passed down through generations. From our slow-cooked, aromatic curries and tender tandoori specialties to our fresh-baked naan, we invite you to embark on an unforgettable journey of taste, warmth, and hospitality.";
  heroWrapper.append(heroText, heroNormaltext);
  return heroWrapper;
}
