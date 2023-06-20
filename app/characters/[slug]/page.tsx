import {Container} from "@/components/Container";
import {getAllCharacters} from "@/lib/characters";
import {endpoint} from "@/utils/endpoint";
import React from "react";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

type CharacterResponse = {
  character: Character;
  character_quotes: Quote[];
};

export default async function page({params}: Params) {
  const response = await getCharacterBySlug(params.slug);

  if (response === null) {
    return (
      <Container className="" as="div">
        Not Found
      </Container>
    );
  }

  const {character, character_quotes} = response;

  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold capitalize">{character.name}</h1>
        <ul className="flex gap-1 text-sm">
          {character.occupations.map((item) => {
            return (
              <li key={item} className="p-2 text-gray-300 bg-gray-800 rounded-md">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="text-sm leading-6 text-justify">{character.description}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {character.images.map((image) => {
            return (
              <li key={image} className="relative flex overflow-hidden bg-gray-900 rounded-xl">
                <Image src={image} width={760} height={435} alt={character.name} />
              </li>
            );
          })}
        </ul>

        {character.skills && (
          <>
            <h2 className="text-xl font-bold">Power and Skills</h2>
            <ul className="flex flex-wrap gap-1">
              {character.skills.map((skill) => {
                return (
                  <li
                    key={skill}
                    className="flex justify-center flex-grow px-2 py-1 text-orange-400 rounded-full bg-orange-900"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </Container>
  );
}

export async function generateStaticParams() {
  const {characters} = await getAllCharacters();
  return characters.map((character: Character) => ({slug: character.slug}));
}

export async function getCharacterBySlug(slug: string): Promise<CharacterResponse | null> {
  const data = await fetch(`${endpoint}/characters/${slug}`);
  if (!data.ok) {
    throw new Error("Failed to fetch Slug");
  }

  return data.json();
}
