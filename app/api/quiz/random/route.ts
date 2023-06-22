import questions from "@/data/quiz.json";
import {getRandomQuestion} from "@/lib/quiz";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    return NextResponse.json({randomQuestion: await getRandomQuestion(questions.data)});
  } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500});
  }
}
