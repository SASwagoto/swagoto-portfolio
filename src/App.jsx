import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;

      const playAudio = () => {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked. Waiting for user interaction...");
        });
      };
      playAudio();
      window.addEventListener("click", playAudio, { once: true });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/audio/bgm.mp3" type="audio/mpeg" />
      </audio>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
