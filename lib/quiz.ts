import {endpoint} from "@/utils/endpoint";

export async function getRandomQuizQuestion(): Promise<RandomQuizResponse> {
  const data = await fetch(`${endpoint}/quiz/random`, {cache: "no-store"});

  if (!data.ok) {
    throw new Error("Failed to load quiz question");
  }

  return data.json();
}

export async function getRandomQuestion(quiz: Quiz[]): Promise<string> {
  const random = Math.floor(Math.random() * quiz.length);
  return quiz[random].id;
}

export async function getQuizQuestion(id: string): Promise<QuizResponse> {
  const question = await fetch(`${endpoint}/quiz/${id}`);

  if (!question.ok) {
    throw new Error("Failed to get question");
  }

  return question.json();
}
