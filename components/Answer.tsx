"use client";
import React, {useEffect, useState} from "react";
import cn from "classnames";
import {FiRepeat} from "react-icons/fi";
import {MdNearbyError} from "react-icons/md";
import {FaCheck} from "react-icons/fa";
import Link from "next/link";

type Props = {
  answers: string[];
  questionId: string;
};

function Answer(props: Props) {
  type data = {
    correct?: string;
    random?: string;
  };
  const {answers, questionId} = props;

  const [selected, setSelected] = useState("");
  const [data, setData] = useState<data>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let subscribed = true;

    if (selected) {
      setLoading(true);
      fetch(`/api/quiz/answer/${questionId}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (subscribed) {
            setData(data);
          }
        });
    }
    return () => {
      console.log("cancelled");
      subscribed = false;
    };
  }, [questionId, selected]);

  return (
    <>
      <ul className="grid grid-cols2 gap-2 md:grid-cols-4">
        {answers.map((item) => {
          const isLoading = selected === item && loading;
          const isWrong = selected === item && data && data?.correct !== selected;
          const isCorrect = data?.correct === item;
          return (
            <li key={item}>
              <button
                disabled={data.correct != null || loading}
                onClick={() => setSelected(item)}
                className={cn(
                  "p-2 rounded-md items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all",
                  isLoading && "animate-pulse",
                  isWrong ? "bg-red-700" : "bg-slate-800",
                  isCorrect && "outline text-green-500"
                )}
              >
                {item}
                {isCorrect && <FaCheck />}
                {isWrong && <MdNearbyError />}
              </button>
            </li>
          );
        })}
      </ul>

      {data?.random && (
        <Link href={`/quiz/${data.random}`} className="flex items-center gap-1 text-blue-400">
          <FiRepeat className="mt-1" /> Do it again
        </Link>
      )}
    </>
  );
}

export default Answer;