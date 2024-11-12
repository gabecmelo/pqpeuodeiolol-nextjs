import { types } from 'react-rough-notation';

export type RoughNotationPhraseType = {
  text: string;
  highlight?: {type: types, color: string};
  break?: boolean;
};

export type PhraseType = {
  id: number;
  phraseParts: RoughNotationPhraseType[];
  author?: string;
};
