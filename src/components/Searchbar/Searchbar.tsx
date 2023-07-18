import { FC, ChangeEvent, MouseEvent, useState } from "react";
import { ISearchBarProps } from "interfaces";

import { useTheme } from "@mui/material/styles";
import { AppBar, FormControl, IconButton } from "@mui/material";
import {
  ToolbarWrap,
  TitleWrap,
  Title,
  FormWrap,
  Input,
  ButtonFrom,
  ThemeWrap,
} from "./Searchbar.styled";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const SearchBar: FC<ISearchBarProps> = ({
  handleSearchSubmit,
  toggleTheme,
}) => {
  const theme = useTheme();

  const [searchName, setSearchName] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchName((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      return;
    }

    handleSearchSubmit(searchName);
    setSearchName("");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ height: "70px", pb: 0 }}>
        <ToolbarWrap
          sx={{
            pl: { xs: "5px", sm: "16px" },
            pr: { xs: "5px", sm: "16px" },
          }}
        >
          <TitleWrap
            sx={{
              display: { xs: "none", sm: "flex" },
              width: { xs: 0, sm: 150, md: 220 },
              gap: { xs: 0, sm: "5px", md: "10px" },
            }}
          >
            <Title
              variant="h1"
              sx={{
                fontWeight: { xs: 500, md: 700 },
                fontSize: { xs: 20, md: 30 },
                display: { xs: "none", sm: "block" },
              }}
            >
              Image finder
            </Title>
            <ImageSearchIcon
              sx={{ fontSize: 28, display: { xs: "none", sm: "block" } }}
              role="icon"
              aria-labelledby="title icon"
              aria-describedby="title icon without actions"
            />
          </TitleWrap>

          <FormControl>
            <FormWrap>
              <Input
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchName}
                onChange={handleNameChange}
                sx={{
                  border: 1.5,
                  borderColor: "#eeeeee",
                  "&:hover, &:focus": {
                    border: 3,
                    borderColor: "#eeeeee",
                  },
                  width: { xs: 180, sm: 250 },
                }}
              />
              <ButtonFrom
                type="submit"
                variant="contained"
                disabled={!searchName}
                onClick={handleSubmit}
                sx={{
                  width: { xs: 18, sm: 55, md: 55 },
                  border: 1,
                  borderRadius: "10px",
                  borderColor: "#eeeeee",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: { xs: 20, sm: 26 },
                    color: "#eeeeee",
                    "&:hover, &:focus": {
                      color: "#d9d9d9",
                    },
                  }}
                  role="icon"
                  aria-labelledby="search icon"
                  aria-describedby="search icon to find images by name"
                />
              </ButtonFrom>
            </FormWrap>
          </FormControl>

          <ThemeWrap sx={{ width: { xs: 0, sm: 150, md: 220 } }}>
            <IconButton onClick={() => toggleTheme()} color="inherit">
              {theme.palette.mode === "light" ? (
                <LightModeIcon
                  sx={{ fontSize: 30 }}
                  role="icon"
                  aria-labelledby="light theme icon"
                  aria-describedby="light theme icon, you can change theme"
                />
              ) : (
                <DarkModeIcon
                  sx={{ fontSize: 30 }}
                  role="icon"
                  aria-labelledby="dark theme icon"
                  aria-describedby="dark theme icon, you can change theme"
                />
              )}
            </IconButton>
          </ThemeWrap>
        </ToolbarWrap>
      </AppBar>
    </>
  );
};
