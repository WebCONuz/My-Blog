import Footer from "./components/footer";
import Intro from "./components/intro";
// import Loader from "./components/loader";
import SidebarLeft from "./components/sidebar/sidebar-left";
import SidebarRight from "./components/sidebar/sidebar-right";
import ServiceContainer from "./components/containers/service-container";
import EcucationContainer from "./components/containers/ecucation-container";
import WorkContainer from "./components/containers/work-container";
import ProjectContainer from "./components/containers/project.container";
import PetProjectContainer from "./components/containers/petproject-container";
import MiniappContainer from "./components/containers/miniapp-container";

function App() {
  return (
    <main id="main" className="flex w-full overflow-x-hidden relative">
      <SidebarLeft />
      <main className="main-content w-full sm:w-[90%] md:w-[93%] lg:w-[70%] h-screen overflow-y-scroll overflow-x-hidden pt-6">
        <Intro />
        <ServiceContainer />
        <EcucationContainer />
        <WorkContainer />
        <ProjectContainer />
        <PetProjectContainer />
        <MiniappContainer />
        <Footer />
      </main>
      <SidebarRight />
    </main>
  );
}

export default App;
