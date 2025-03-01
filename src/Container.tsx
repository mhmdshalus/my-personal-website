import { Box } from "@mui/material";
import Menu from "./Menu";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";

interface ContainerProps {
  itemToView: string;
  setItemToView: (item: string) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Container: React.FC<ContainerProps> = ({
  itemToView,
  setItemToView,
  currentView,
  setCurrentView,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "90vw", md: "65vw" },
        maxHeight: "90vh",
        borderRadius: 5,
        padding: 2,
        display: "flex",
        textAlign: "left",
        backgroundColor: "rgba(30, 30, 30, 0.8)",
        color: "#ffffff",
        filter: "none",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          gap: 1,
          paddingBottom: 1,
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
      </Box>
      {itemToView === "basic-info" && <BasicInfo />}
      {itemToView === "about-me" && <AboutMe />}

      <Menu {...{ itemToView, setItemToView, currentView, setCurrentView }} />
    </Box>
  );
};

export default Container;
