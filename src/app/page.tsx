import Navigation from "@/components/Navigation";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Expertise from "@/components/Expertise";
import ForFun from "@/components/ForFun";
import Connect, { Footer } from "@/components/Connect";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Introduction />
      <About />
      <Experience />
      <Research />
      <Expertise />
      <ForFun />
      <Connect />
      <Footer />
    </main>
  );
}
