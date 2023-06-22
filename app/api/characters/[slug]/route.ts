import {NextRequest, NextResponse} from "next/server";

import characters from "@/data/characters.json";
import quotes from "@/data/quotes.json";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(_request: NextRequest, {params}: Params) {
  try {
    const character = characters.data.find((item: Character) => item.slug === params.slug);

    if (!character) {
      return new NextResponse("not found", {status: 404});
    }
    const character_quotes = quotes.data.filter(
      (quote: Quote) => quote.character_id === character.id
    );
    return NextResponse.json({
      character,
      character_quotes: character_quotes.length > 0 ? character_quotes : null,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500});
  }
}
