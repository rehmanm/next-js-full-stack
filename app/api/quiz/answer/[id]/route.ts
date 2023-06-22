import {NextRequest, NextResponse} from "next/server";
import questions from "@/data/quiz.json";
import {getRandomQuestion} from "@/lib/quiz";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_request: NextRequest, {params}: Params) {
  try {
    const question = questions.data.find((question) => question.id === params.id);

    if (!question) {
      return new NextResponse("question not found", {status: 404});
    }

    const {correct_answer} = question;

    const filteredQuestions = questions.data.filter((question) => question.id !== params.id);

    return NextResponse.json({
      correct: correct_answer,
      random: await getRandomQuestion(filteredQuestions),
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500});
  }
}
