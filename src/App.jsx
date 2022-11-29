import "./App.scss";
import {
  Feature,
  Footer,
  Hero,
  Landing,
  MoreFeature,
  Navbar,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Hero />
        <Feature />
        <Landing />
        <MoreFeature />
        <Footer />
      </div>
    </div>
  );
}

export default App;
