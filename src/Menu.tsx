import { Box, Typography } from "@mui/material";

interface MenuProps {
  itemToView: string;
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Menu = ({ itemToView, currentView, setCurrentView }: MenuProps) => {
  return (
    !currentView && (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          paddingBottom: 1,
        }}
      >
        {itemToView !== "basic-info" && (
          <>
            <Typography
              color="text.secondary"
              sx={{
                fontFamily: '"Press Start 2P", monospace',
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                position: "relative",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "2px 2px 0px #000, 3px 3px 0px #4fc3f7",
                "&:hover": {
                  color: "#4fc3f7",
                  textShadow: "2px 2px 0px #000, 4px 4px 0px #4fc3f7",
                  "&::after": {
                    content: '"<Home />"',
                  },
                },
                "&::after": {
                  content: '"Home"',
                  transition: "content 0.3s ease",
                },
              }}
              onClick={() => {
                setCurrentView("git checkout home");
              }}
            />
          </>
        )}

        {itemToView !== "about-me" && (
          <>
            <Typography
              color="text.secondary"
              sx={{
                fontFamily: '"Press Start 2P", monospace',
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                position: "relative",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "2px 2px 0px #000, 3px 3px 0px #4fc3f7",
                "&:hover": {
                  color: "#4fc3f7",
                  textShadow: "2px 2px 0px #000, 4px 4px 0px #4fc3f7",
                  "&::after": {
                    content: '"<About me />"',
                  },
                },
                "&::after": {
                  content: '"About me"',
                  transition: "content 0.3s ease",
                },
              }}
              onClick={() => {
                setCurrentView("git checkout about-me");
              }}
            />
          </>
        )}

        {itemToView !== "resume" && (
          <>
            <Typography
              color="text.secondary"
              sx={{
                fontFamily: '"Press Start 2P", monospace',
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                position: "relative",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "2px 2px 0px #000, 3px 3px 0px #4fc3f7",
                "&:hover": {
                  color: "#4fc3f7",
                  textShadow: "2px 2px 0px #000, 4px 4px 0px #4fc3f7",
                  "&::after": {
                    content: '"<Resume />"',
                  },
                },
                "&::after": {
                  content: '"Resume"',
                  transition: "content 0.3s ease",
                },
              }}
              onClick={() => {
                setCurrentView("git checkout resume");
              }}
            />
          </>
        )}
      </Box>
    )
  );
};

export default Menu;
