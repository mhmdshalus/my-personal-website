import { useEffect } from "react";
import Home from "./Home";

const App: React.FC = () => {
  useEffect(() => {
    // Set the cursor to always be "pointer"
    document.body.style.cursor = "pointer";

    const trailContainer = document.createElement("div");
    trailContainer.style.position = "fixed";
    trailContainer.style.top = "0";
    trailContainer.style.left = "0";
    trailContainer.style.width = "100vw";
    trailContainer.style.height = "100vh";
    trailContainer.style.pointerEvents = "none";
    document.body.appendChild(trailContainer);

    const letters: HTMLDivElement[] = [];
    const maxLetters = 10; // Number of trailing letters

    for (let i = 0; i < maxLetters; i++) {
      const letter = document.createElement("div");
      letter.innerText = "Shalu";
      letter.style.position = "absolute";
      letter.style.fontSize = "18px";
      letter.style.fontWeight = "bold";
      letter.style.color = "#03ffef"; // Bright color for visibility
      letter.style.textShadow =
        "0 0 8px rgba(255, 87, 51, 0.8), 0 0 12px rgba(213, 196, 112, 0.6)"; // Glow effect
      letter.style.transition =
        "transform 0.1s ease-out, opacity 0.4s ease-out";
      letter.style.opacity = "0";
      trailContainer.appendChild(letter);
      letters.push(letter);
    }

    let index = 0;

    const updateTrail = (e: MouseEvent) => {
      const letter = letters[index];
      letter.style.transform = `translate(${e.clientX + 5}px, ${
        e.clientY + 5
      }px)`;
      letter.style.opacity = "1";

      setTimeout(() => {
        letter.style.opacity = "0";
      }, 500); // Fades out after 500ms

      index = (index + 1) % maxLetters;
    };

    document.addEventListener("mousemove", updateTrail);

    return () => {
      document.removeEventListener("mousemove", updateTrail);
      document.body.removeChild(trailContainer);
      document.body.style.cursor = "default"; // Reset cursor when unmounting
    };
  }, []);

  return <Home />;
};

export default App;
