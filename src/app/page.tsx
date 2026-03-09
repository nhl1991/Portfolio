"use server"
import Coverletter from "@/components/Coverletter/CoverLetter";
import Introduction from "@/components/Introduction/Introduction";
import { LocaleButton } from "@/components/LocaleButton";
import Projects from "@/components/Projects/Projects";


export default async function Home() {

  return (
    <>

      <LocaleButton />
      <Introduction />
      <Coverletter />
      <Projects />
      {/* <Outro /> */}
    </>
  );
}
