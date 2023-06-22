import Answer from "@/components/Answer";
import {Container} from "@/components/Container";
import {getQuizQuestion} from "@/lib/quiz";

import React from "react";

type Params = {
  params: {
    id: string;
  };
};

async function page({params}: Params) {
  const {question} = await getQuizQuestion(params.id);

  return (
    <Container className="">
      <h1>{question.title}</h1>
      <Answer answers={question.answers} questionId={question.id} />
    </Container>
  );
}

export default page;
