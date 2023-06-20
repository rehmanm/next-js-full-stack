import Image from "next/image";
import {Inter} from "next/font/google";
import {getAllCharacters} from "@/lib/characters";
import {Container} from "@/components/Container";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default async function Home() {
  const data = await getAllCharacters();

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map((character: Character) => {
          return (
            <Link href={`/characters/${character.slug}`} key={character.name}>
              <Image
                src={character.avatar}
                alt={""}
                width={500}
                height={400}
                className="transition-all duration-500 hover:scale-110 hover:rotate-2"
              />
            </Link>
          );
        })}
      </Container>
    </main>
  );
}
