type Character = {
  id: number;
  name: string;
  slug: string;
  skills?: string[];
  description: string;
  age: string;
  avatar: string;
  images: string[];
  occupations: string[];
};

type Quote = {
  character_id: number;
  quote: string;
};

type CharacterResponse = {
  character: Character;
  character_quotes: Quote[];
};

type Quiz = {
  id: string;
  title: string;
  answers: string[];
  correct_answer: string;
};

type QuizResponse = {
  question: Quiz;
};

type RandomQuizResponse = {
  randomQuestion: string;
};
