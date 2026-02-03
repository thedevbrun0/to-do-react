import { Logo } from "./components/Logo";
import { Input } from "./components/Input";
import "../src/components/Styles/App.css";

function App() {
  return (
    <>
      <div className="container">
        <Logo />
        <Input />
      </div>
    </>
  );
}

export default App;
