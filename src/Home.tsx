import { Box } from "@mui/material";
import bg from "./assets/bg.png";
import Terminal from "./Terminal";
import Container from "./Container";
import { useEffect, useState } from "react";

const Home = () => {
  const [itemToView, setItemToView] = useState("basic-info");
  const [currentView, setCurrentView] = useState("");

  useEffect(() => {
    if (currentView) {
      const timer = setTimeout(() => {
        if (currentView === "git checkout home") {
          setItemToView("basic-info");
        }
        if (currentView === "git checkout about-me") {
          setItemToView("about-me");
        }
        setCurrentView("");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [currentView]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Container
        {...{ itemToView, setItemToView, currentView, setCurrentView }}
      />
      <Terminal {...{ currentView }} />
    </Box>
  );
};

export default Home;
