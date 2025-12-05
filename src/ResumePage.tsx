import {
  Box,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { base64PDF } from "./constants/constants";

export default function ResumePage() {
  const downloadBase64PDF = (base64Data: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = `data:application/pdf;base64,${base64Data}`;
    link.download = fileName;
    link.click();
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 900,
        mx: "auto",
        bgcolor: "#121212",
        color: "#e0e0e0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          bgcolor: "#1a1a1a",
          p: 2,
          borderRadius: 2,
          border: "1px solid #333",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Mohammed Shalu S
          </Typography>
          <Typography variant="subtitle1">
            Senior Frontend Engineer (React) | Application & Technical Support
          </Typography>
          <Typography variant="body2">
            Abu Dhabi, UAE • +971 56 244 8757 • mhmdshalus@gmail.com
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() =>
              downloadBase64PDF(base64PDF, "Mohammed_Shalu_S_Resume.pdf")
            }
            sx={{
              bgcolor: "#2a2a2a",
              color: "#e0e0e0",
              border: "1px solid #444",
              "&:hover": {
                bgcolor: "#3a3a3a",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Box>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6">Professional Summary</Typography>
        <Typography variant="body2">
          Senior Frontend Engineer with 7+ years of experience building and
          optimizing production-grade React and TypeScript applications. Skilled
          in scalable architecture, performance tuning, REST API integration,
          Agile workflows, and supporting debugging and application-level issue
          resolution.
        </Typography>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Core Skills
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[
            "React.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Next.js (basic)",
            "Context API",
            "Redux",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "MUI",
            "Bootstrap",
            "Responsive Design",
            "Accessibility",
            "Lazy Loading",
            "Memoization",
            "Code Splitting",
            "SEO",
            "Page Speed Optimization",
            "Technical Support",
            "Application Support",
            "UI Debugging",
            "API Debugging",
            "Log Analysis",
            "Tracing",
            "AWS (EC2, S3, IAM)",
            "Linux",
            "Postman",
            "Swagger",
            "Insomnia",
            "REST API Integrations",
            "Git",
            "Bitbucket",
            "Jira",
            "Agile",
            "Unit Testing",
          ].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: "#2a2a2a",
                color: "#e0e0e0",
                border: "1px solid #444",
                fontSize: "0.8rem",
              }}
            />
          ))}
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6">Professional Experience</Typography>
        <Box>
          <Typography fontWeight={600}>
            Senior Frontend Engineer —{" "}
            <a
              href="https://zdistancelab.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                color: "#90caf9",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#64b5f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#90caf9")}
            >
              zDistanceLab
            </a>
            , India (Oct 2018 – Present)
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              Designed and developed modular React applications using
              TypeScript.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Built reusable UI libraries and design systems.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Implemented lazy loading, memoization, and code splitting for
              performance.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Integrated REST APIs with robust error handling.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Translated wireframes into maintainable UI architecture.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Led planning, estimations, and code reviews; mentored juniors.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Diagnosed UI/API issues, reproduced bugs, supported production.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Used AWS (S3, EC2) + Linux for deployments and checks.
            </ListItem>
          </List>
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6">Technical Support</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Debugged UI/API issues using dev tools, network logs, tracing.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Reproduced customer issues, validated patches.
          </ListItem>{" "}
          <ListItem sx={{ display: "list-item" }}>
            Analyzed HTTP errors, API failures, monitored production.
          </ListItem>{" "}
          <ListItem sx={{ display: "list-item" }}>
            Coordinated with backend + QA teams.
          </ListItem>
        </List>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6">Education</Typography>

        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            MCA — University of Kerala (2015–2018)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            BSc Computer Science — University of Kerala (2011–2014)
          </ListItem>
        </List>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Technical Tools
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[
            "Git",
            "GitHub",
            "Bitbucket",
            "Postman",
            "Swagger",
            "Insomnia",
            "Linux (basic)",
            "AWS (EC2, S3, IAM)",
            "Vite",
            "Webpack",
            "Figma",
            " Adobe XD",
            "Jira",
            "Trello",
          ].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: "#2a2a2a",
                color: "#e0e0e0",
                border: "1px solid #444",
                fontSize: "0.8rem",
              }}
            />
          ))}
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mb: 4,
          bgcolor: "#1e1e1e",
          color: "#e0e0e0",
          border: "1px solid #333",
        }}
      >
        <Typography variant="h6">Strengths</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Analytical problem-solving
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Root cause diagnosis
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Clear technical communication
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Attention to detail</ListItem>
          <ListItem sx={{ display: "list-item" }}>Fast learner</ListItem>
          <ListItem sx={{ display: "list-item" }}>Team coordination</ListItem>
        </List>
      </Paper>
    </Box>
  );
}
