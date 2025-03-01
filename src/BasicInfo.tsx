import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Typewriter } from "react-simple-typewriter";
import picofme from "./assets/picofme2.png";

const BasicInfo = () => {
  return (
    <Box
      sx={{
        p: 10,
        pb: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        textAlign: "left",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {" "}
      {/* Avatar in the center */}
      <Avatar
        src={picofme} // Replace with your image path
        sx={{ width: 200, height: 200, boxShadow: 3 }}
      />
      {/* Introduction Text with Typing Effect */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "monospace", color: "#4fc3f7" }}
        >
          <Typewriter
            words={["Hi, I am Mohammed Shalu"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </Typography>

        <Box>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontFamily: "monospace",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CodeIcon sx={{ color: "#d0e677" }} />
            Frontend React Developer
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontFamily: "monospace",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EngineeringIcon sx={{ color: "#03ffef" }} />
            6+ Years of Experience
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontFamily: "monospace",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PublicIcon sx={{ color: "#f757ce" }} />
            Based in Kerala, India.
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} mt={2}>
          <IconButton
            href="https://www.linkedin.com/in/mohammed-shalu/"
            target="_blank"
            sx={{ color: "#0e76a8" }}
          >
            <Tooltip title="LinkedIn" placement="top" arrow>
              <LinkedIn />
            </Tooltip>
          </IconButton>
          <IconButton
            href="https://github.com/mhmdshalus"
            target="_blank"
            sx={{ color: "#ffffff" }}
          >
            <Tooltip title="GitHub" placement="top" arrow>
              <GitHub />
            </Tooltip>
          </IconButton>
          <IconButton
            href="mailto:mhmdshalus@gmail.com"
            sx={{ color: "#ff3d00" }}
          >
            <Tooltip title="Email" placement="top" arrow>
              <Email />
            </Tooltip>
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default BasicInfo;
