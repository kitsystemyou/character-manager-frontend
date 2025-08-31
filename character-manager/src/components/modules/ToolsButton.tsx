import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import CasinoIcon from "@mui/icons-material/Casino";

type ToolsButtonProps = {
  onRoll3d6AddToSTR: () => void;
};

const ToolsButton: React.FC<ToolsButtonProps> = ({ onRoll3d6AddToSTR }) => {
  const [open, setOpen] = useState(false);
  const actions = [
    {
      icon: <CasinoIcon />,
      name: "3D6合計をSTRに加算",
      onClick: onRoll3d6AddToSTR,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="tools"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        "& .MuiFab-primary": {
          backgroundColor: "#8c7851",
          color: "#FFF",
          "&:hover": { backgroundColor: "#7a6946" },
        },
      }}
      open={open}
      onOpen={(e, reason) => {
        if (reason === "toggle") setOpen(true); // クリック時のみ開く
      }}
      onClose={(e, reason) => {
        if (reason === "toggle" || reason === "escapeKeyDown" || reason === "blur") {
          setOpen(false); // クリック/ESC/フォーカス外れで閉じる（hoverでは閉じない）
        }
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => {
            action.onClick();
            setOpen(false);
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default ToolsButton;
