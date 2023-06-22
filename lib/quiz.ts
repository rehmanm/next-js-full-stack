import {endpoint} from "@/utils/endpoint";

export async function getRandomQuizQuestion(): Promise<RandomQuizResponse> {
  const data = await fetch(`${endpoint}/quiz/random`, {cache: "no-store"});

  if (!data.ok) {
    throw new Error("Failed to load quiz question");
  }

  return data.json();
}
