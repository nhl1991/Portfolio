
import AboutContainer from "@/components/About/AboutContainer";
import Introduction from "@/components/Introduction/Introduction";
import { LocaleButton } from "@/components/LocaleButton";
import ProjectContainer from "@/components/Projects/Projects";


export default async function Home() {

  return (
    <>

      <LocaleButton />
      <Introduction />
      <AboutContainer />
      <ProjectContainer />
      {/* <Outro /> */}
    </>
  );
}
