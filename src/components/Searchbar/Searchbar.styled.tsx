import styled from "styled-components";
import { Toolbar, Typography, Box, TextField, Button } from "@mui/material";

export const ToolbarWrap = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: "70px",
}));

export const TitleWrap = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "left",
}));

export const Title = styled(Typography)(() => ({}));

export const FormWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
}));

export const Input = styled(TextField)(() => ({
  mt: "20px",
  borderRadius: "10px",
  fontSize: 20,
  fontWeight: 500,
}));

export const ButtonFrom = styled(Button)(() => ({
  height: 45,
  scale: 1,
  "&:hover, &:focus": {
    scale: 1.05,
  },
}));

export const ThemeWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "right",
}));
