import { phrases } from "../db/db";

export const helpers = {
  getPhraseById: (id: number) => phrases.find((phrase) => phrase.id === id),
  getRandomId: () => Math.floor(Math.random() * phrases.length) + 1,
};
