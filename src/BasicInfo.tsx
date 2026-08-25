import { Avatar, Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { ArrowForward, Email, GitHub, LinkedIn, LocationOn, WorkOutline } from "@mui/icons-material";
import picofme from "./assets/picofme2.png";
import { getExperienceYears } from "./utils/utils";

const BasicInfo = () => (
  <Box className="hero-section">
    <Box className="hero-copy">
      <div className="eyebrow"><span /> HELLO, WORLD</div>
      <Typography component="h1" className="hero-title">I build digital experiences that feel <em>effortless.</em></Typography>
      <Typography className="hero-intro">I’m <strong>Mohammed Shalu</strong>, a senior frontend engineer focused on turning complex problems into fast, accessible, and beautifully simple products.</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} className="hero-actions">
        <Button className="primary-cta" href="mailto:mhmdshalus@gmail.com" endIcon={<ArrowForward />}>Let’s work together</Button>
        <Button className="secondary-cta" href="https://github.com/mhmdshalus" target="_blank" startIcon={<GitHub />}>View GitHub</Button>
      </Stack>
      <Box className="quick-facts"><span><WorkOutline /> {getExperienceYears("2018-10-10")}+ years experience</span><span><LocationOn /> Kerala, India</span></Box>
    </Box>
    <Box className="portrait-side">
      <div className="portrait-frame"><Avatar src={picofme} alt="Mohammed Shalu" /></div>
      <Stack direction="row" className="social-row">
        <Tooltip title="LinkedIn"><IconButton href="https://www.linkedin.com/in/mohammed-shalu/" target="_blank"><LinkedIn /></IconButton></Tooltip>
        <Tooltip title="GitHub"><IconButton href="https://github.com/mhmdshalus" target="_blank"><GitHub /></IconButton></Tooltip>
        <Tooltip title="Email"><IconButton href="mailto:mhmdshalus@gmail.com"><Email /></IconButton></Tooltip>
      </Stack>
    </Box>
  </Box>
);
export default BasicInfo;
