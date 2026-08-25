import { Avatar, Box, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { CodeRounded, Email, GitHub, LanguageRounded, LinkedIn, SchoolRounded, SportsEsportsRounded } from "@mui/icons-material";
import picofme from "./assets/picofme2.png";
import { getExperienceYears } from "./utils/utils";

const skills = ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "MUI", "REST APIs", "AWS"];

const AboutMe = () => (
  <Box className="about-page">
    <Box className="about-heading">
      <div className="eyebrow"><span /> BEYOND THE CODE</div>
      <Typography component="h1">A developer who cares about the <em>details.</em></Typography>
      <Typography>I combine thoughtful design with reliable engineering to build interfaces people genuinely enjoy using.</Typography>
    </Box>

    <Box className="about-grid">
      <aside className="profile-card">
        <div className="profile-image"><Avatar src={picofme} alt="Mohammed Shalu" /></div>
        <Typography component="h2">Mohammed Shalu</Typography>
        <Typography className="profile-role">Senior Frontend Engineer</Typography>
        <div className="profile-meta"><span>Kerala, India</span><i /> <span>{getExperienceYears("2018-10-10")}+ years experience</span></div>
        <Stack direction="row" className="about-socials">
          <Tooltip title="LinkedIn"><IconButton href="https://www.linkedin.com/in/mohammed-shalu/" target="_blank" aria-label="LinkedIn"><LinkedIn /></IconButton></Tooltip>
          <Tooltip title="GitHub"><IconButton href="https://github.com/mhmdshalus" target="_blank" aria-label="GitHub"><GitHub /></IconButton></Tooltip>
          <Tooltip title="Email"><IconButton href="mailto:mhmdshalus@gmail.com" aria-label="Email"><Email /></IconButton></Tooltip>
        </Stack>
      </aside>

      <Box className="about-story">
        <section className="story-card main-story">
          <div className="section-label"><CodeRounded /> MY STORY</div>
          <Typography>
            I’m a frontend engineer with over {getExperienceYears("2018-10-10")} years of experience turning complex product ideas into responsive, accessible web applications. My work lives at the intersection of clean design and maintainable code, with React and TypeScript at the center of my toolkit.
          </Typography>
          <Typography>
            I enjoy solving tricky interface challenges, improving performance, and collaborating with designers and engineers to ship experiences that feel simple—even when the systems behind them are not.
          </Typography>
        </section>

        <section className="story-card skills-card">
          <div className="section-label"><CodeRounded /> TOOLKIT</div>
          <Box className="skill-list">{skills.map((skill) => <Chip key={skill} label={skill} />)}</Box>
        </section>

        <Box className="mini-card-grid">
          <section className="story-card mini-card"><SchoolRounded /><div><strong>Always learning</strong><span>MCA &amp; BSc Computer Science, University of Kerala</span></div></section>
          <section className="story-card mini-card"><SportsEsportsRounded /><div><strong>Beyond work</strong><span>Gaming, cricket, carrom and movies</span></div></section>
          <section className="story-card mini-card"><LanguageRounded /><div><strong>Languages</strong><span>English and Malayalam</span></div></section>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default AboutMe;
