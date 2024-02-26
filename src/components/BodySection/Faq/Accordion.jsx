import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./accordion.module.css";
import { ReactComponent as AddIcon } from "../../../assets/add_icon.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  backgroundColor: "var(--color-secondary)",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    display: "none",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: "var(--color-white)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  color: "rgba(255, 255, 255, 0.3)",
  background: "var(--color-secondary)",
}));

const AccordionSet = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.wrapper}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ borderBottom: `2px solid var(--color-border)` }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              opacity: 1,
            }}
          >
            Do I need a personal injury report?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            fugiat, accusamus facilis necessitatibus ea eveniet temporibus
            similique veritatis repellendus perspiciatis enim nesciunt
            distinctio. Dolores cum hic eveniet nulla similique quibusdam error
            libero culpa, mollitia quidem tempora delectus laborum ab vel
            aspernatur consectetur illo quia magni temporibus eum consequatur
            quasi. Et.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ borderBottom: `2px solid var(--color-border)` }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              opacity: 1,
            }}
          >
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ borderBottom: `2px solid var(--color-border)` }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              opacity: 1,
            }}
          >
            What should I do right after car accident?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              opacity: 1,
            }}
          >
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionSet;
