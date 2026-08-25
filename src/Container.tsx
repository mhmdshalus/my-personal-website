import { Box, IconButton, Tooltip } from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";
import ResumePage from "./ResumePage";

interface ContainerProps {
  itemToView: string;
  setItemToView: (item: string) => void;
}

const Container: React.FC<ContainerProps> = ({
  itemToView,
  setItemToView,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <Box
      className="portfolio-window"
      sx={{
        width: "min(1180px, 100%)",
        height: { xs: "calc(100svh - 72px)", md: "min(780px, calc(100svh - 100px))" },
        borderRadius: { xs: 4, md: 6 },
        display: "flex",
        textAlign: "left",
        backgroundColor: "rgba(8, 14, 27, 0.9)",
        color: "#ffffff",
        filter: "none",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.1)",
        boxShadow: "0 35px 100px rgba(0,0,0,.55)",
        backdropFilter: "blur(22px)",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: "100%",
          display: "flex",
          gap: 1,
          px: { xs: 2, md: 3 }, py: 2,
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: "#ff5f56",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: "#ffbd2e",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: "#27c93f",
            borderRadius: "50%",
          }}
        />
        <Menu {...{ itemToView, setItemToView }} />
        <Tooltip title={`Switch to ${theme === "dark" ? "day" : "dark"} mode`}>
          <IconButton
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "day" : "dark"} mode`}
          >
            {theme === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ overflow: "auto", flex: 1 }} className="content-panel">
        {itemToView === "basic-info" && <BasicInfo />}
        {itemToView === "about-me" && <AboutMe />}
        {itemToView === "resume" && <ResumePage />}
      </Box>
    </Box>
  );
};

export default Container;
