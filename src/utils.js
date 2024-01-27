import glagoli from "./glagoli.json";

export function getRandomGlagolCardData() {
  const randomIndex = Math.floor(Math.random() * glagoli.length);
  const randomGlagol = glagoli[randomIndex];

  const keys = Object.keys(randomGlagol).filter(
    (key) => key !== "id" && key !== "infinitiv"
  );
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  const pitanje =
    randomKey.charAt(0).toUpperCase() +
    randomKey.slice(1) +
    " glagola: " +
    randomGlagol.infinitiv.toUpperCase();
  const odgovor = randomGlagol[randomKey].toUpperCase();

  return { pitanje, odgovor };
}
