import Coverletter from "@/components/Coverletter/CoverLetter";
import Introduction from "@/components/Introduction/Introduction";
import Projects from "@/components/Projects/Projects";


export default function Home() {

  return (
    <>
      <Introduction />
      <Coverletter />
      <Projects />
      {/* <Outro /> */}
    </>
  );
}
