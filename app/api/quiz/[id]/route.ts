import {NextRequest, NextResponse} from "next/server";
import questions from "@/data/quiz.json";

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

    const {correct_answer, ...rest} = question;

    return NextResponse.json({
      question: rest,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500});
  }
}
