import {endpoint} from "@/utils/endpoint";

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`);

  if (!data.ok) {
    throw new Error("Failed to fetch characters");
  }

  return data.json();
}

export async function getCharacterBySlug(slug: string): Promise<CharacterResponse | null> {
  const data = await fetch(`${endpoint}/characters/${slug}`);
  if (!data.ok) {
    throw new Error("Failed to fetch Slug");
  }

  return data.json();
}
