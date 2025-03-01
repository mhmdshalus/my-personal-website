import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

interface TerminalProps {
  currentView: string;
}

const Terminal = ({ currentView }: TerminalProps) => {
  return (
    currentView && (
      <Box
        sx={{
          width: { xs: "90vw", md: "65vw" },
          borderRadius: 5,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          backgroundColor: "rgba(30, 30, 30, 0.8)", // Adjusted transparency
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
        }}
      >
        <Box>
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
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ fontFamily: "monospace", color: "white" }}
            >
              <Typewriter
                words={[`> ${currentView}`]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default Terminal;
