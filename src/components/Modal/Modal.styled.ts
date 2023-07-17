import styled from "styled-components";
import { Box } from "@mui/material";

export const Overlay = styled(Box)(() => ({
  position: "fixed" as "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 1200,
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "100vh;",
}));

export const ModalWindow = styled(Box)(() => ({
  marginTop: "50px",
}));
