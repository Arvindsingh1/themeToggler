import { useEffect, useState } from "react";
import ThemeBtn from "./components/Card";
import Card from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeBtn />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
