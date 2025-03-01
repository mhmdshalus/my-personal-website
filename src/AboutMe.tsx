import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import picofme from "./assets/picofme2.png";
import ArticleIcon from "@mui/icons-material/Article";

const AboutMe = () => {
  return (
    <Box
      sx={{
        p: 10,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Avatar src={picofme} sx={{ width: 150, height: 150, boxShadow: 3 }} />
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontFamily: "monospace", color: "#4fc3f7" }}
      >
        About Me
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "monospace", color: "#ffffff", textAlign: "justify" }}
      >
        Hi, I'm Mohammed Shalu, a passionate Frontend React Developer with over
        6 years of experience in building responsive and dynamic web
        applications. I specialize in React.js, Next.js, and TypeScript,
        crafting visually appealing and performant user interfaces using modern
        frameworks like Tailwind CSS, MUI, and Bootstrap. I enjoy solving
        complex front-end challenges and collaborating with cross-functional
        teams to deliver high-quality software solutions.
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "monospace", color: "#ffffff", textAlign: "justify" }}
      >
        My journey in technology started with a Bachelor's degree in Computer
        Science from the University of Kerala, followed by a Master's degree in
        Computer Applications. Since then, I have worked on various projects. I
        am constantly learning and expanding my knowledge to stay up-to-date
        with the latest industry trends and advancements.
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "monospace", color: "#ffffff", textAlign: "justify" }}
      >
        Apart from coding, I have a keen interest in gaming, cricket, and
        carroms. Watching movies and exploring new technologies also excite me.
        I am fluent in English and Malayalam, which allows me to connect with
        diverse audiences. Based in Kerala, India, I am open to new
        opportunities, collaborations, and learning experiences.
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "monospace", color: "#ffffff", textAlign: "justify" }}
      >
        If you'd like to connect, feel free to reach out to me via email at
        mhmdshalus@gmail.com. You can also find me on LinkedIn and GitHub.
      </Typography>
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
        </IconButton>{" "}
        <IconButton
          href="https://docs.google.com/document/d/1RiuToTafYqkeLPAxIlt1PKsMG_nUU8h1ZrlOXq-PWvU/edit?usp=sharing"
          target="_blank"
          sx={{ color: "#d0e677" }}
        >
          <Tooltip title="View resume" placement="top" arrow>
            <ArticleIcon />
          </Tooltip>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AboutMe;
