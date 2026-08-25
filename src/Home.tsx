import { Box } from "@mui/material";
import Container from "./Container";
import { useState } from "react";

const Home = () => {
  const [itemToView, setItemToView] = useState("basic-info");

  return (
    <Box
      sx={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 1.5, md: 4 },
        py: { xs: 2, md: 4 },
        position: "relative",
      }}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Container
        {...{ itemToView, setItemToView }}
      />
      <p className="footer-note">Designed &amp; built with curiosity · © {new Date().getFullYear()} Mohammed Shalu</p>
    </Box>
  );
};

export default Home;
