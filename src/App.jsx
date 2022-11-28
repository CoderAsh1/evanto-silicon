import "./App.scss";
import { Hero, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Hero />
        {/* <Feature />
      <Landing />
      <MoreFeature />
    <Footer /> */}
      </div>
    </div>
  );
}

export default App;
