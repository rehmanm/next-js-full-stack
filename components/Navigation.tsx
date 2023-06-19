import Link from "next/link";
import {Container} from "./Container";
import React from "react";
import Image from "next/image";
import {TbArrowBigRightFilled} from "react-icons/tb";

function Navigation() {
  return (
    <div className="sticky top-0 backdrop-blur-0 bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Container className="flex justify-between py-5" as="nav">
        <Link href="/">
          <Image src="/next.svg" alt="Full Stack App" width={70} height={70} />
        </Link>
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
        >
          <TbArrowBigRightFilled className="text-lg" />
          Take a Quiz
        </Link>
      </Container>
    </div>
  );
}

export default Navigation;
