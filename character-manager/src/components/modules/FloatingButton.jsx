import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FloatingButton = () => {
  return (
    <Fab
      color="primary"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#8c7851",
        color: "#FFF",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default FloatingButton