
import { Hero } from "../components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { Navbar } from "@/components/Navbar";
import About from "../components/About";
import Tech from "@/components/Tech";
import Join from "@/components/Join";
import Footer from "@/components/Footer";


export default function Home() {
  return (
       <div className="overflow-clip">
         <Navbar />
         <Hero />
         <About />
         <Tech />
         <RecentProjects />
         <Clients />
         <Join />
         <Footer />
       </div>
  );
}
