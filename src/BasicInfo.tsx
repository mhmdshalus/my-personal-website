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
        p: { xs: 3, md: 5 },
        pb: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 4 },
        textAlign: { xs: "center", md: "left" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Avatar
        src={picofme}
        sx={{
          width: { xs: 120, sm: 160, md: 200 },
          height: { xs: 120, sm: 160, md: 200 },
          boxShadow: 3,
        }}
      />
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
          sx={{
            fontFamily: "monospace",
            color: "#4fc3f7",
            fontSize: { xs: "1.2rem", sm: "2rem", md: "2.5rem" },
          }}
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
          {[
            {
              icon: <CodeIcon sx={{ color: "#d0e677" }} />,
              text: "Frontend React Developer",
            },
            {
              icon: <EngineeringIcon sx={{ color: "#03ffef" }} />,
              text: "6+ Years of Experience",
            },
            {
              icon: <PublicIcon sx={{ color: "#f757ce" }} />,
              text: "Based in Kerala, India.",
            },
          ].map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              sx={{
                fontFamily: "monospace",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {item.icon} {item.text}
            </Typography>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          spacing={2}
          mt={2}
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {[
            {
              icon: <LinkedIn />,
              color: "#0e76a8",
              link: "https://www.linkedin.com/in/mohammed-shalu/",
              tooltip: "LinkedIn",
            },
            {
              icon: <GitHub />,
              color: "#ffffff",
              link: "https://github.com/mhmdshalus",
              tooltip: "GitHub",
            },
            {
              icon: <Email />,
              color: "#ff3d00",
              link: "mailto:mhmdshalus@gmail.com",
              tooltip: "Email",
            },
          ].map((item, index) => (
            <IconButton
              key={index}
              href={item.link}
              target="_blank"
              sx={{ color: item.color }}
            >
              <Tooltip title={item.tooltip} placement="top" arrow>
                {item.icon}
              </Tooltip>
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default BasicInfo;
