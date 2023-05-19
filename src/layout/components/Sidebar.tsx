import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { pages, propTypes } from "./common";
import { Typography } from "@mui/joy";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Sidebar({ state, setState }: propTypes) {
  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor={i18n.dir() === "ltr" ? "left" : "right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 220 }}>
          <Typography
            noWrap
            sx={{
              display: { xs: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              fontSize: "2rem",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Divider sx={{ background: "#fff" }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                onClick={() => setState(false)}
                to={page.toLowerCase()}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button sx={{ my: 2, color: "#fff", display: "block" }}>
                  {t(`${page}`)}
                </Button>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              position: "absolute",
              bottom: "1rem",
            }}
          >
            <Button
              sx={{
                border: "1px solid grey",
                margin: "0.2rem",
                padding: "0",
              }}
              onClick={() => {
                localStorage.setItem("LNG", JSON.stringify({ language: "en" }));
                i18n.changeLanguage("en");
              }}
            >
              Eng
            </Button>
            <Button
              sx={{
                border: "1px solid grey",
                margin: "0.2rem 0.2rem 0.2rem 0.4rem",
                padding: "0",
              }}
              onClick={() => {
                i18n.changeLanguage("hi");
                localStorage.setItem("LNG", JSON.stringify({ language: "hi" }));
              }}
            >
              {t(`हिन`)}
            </Button>
            <Button
              sx={{
                border: "1px solid grey",
                margin: "0.2rem",
                padding: "0",
              }}
              onClick={() => {
                localStorage.setItem("LNG", JSON.stringify({ language: "ur" }));
                i18n.changeLanguage("ur");
              }}
            >
              اردو
            </Button>
          </Box>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default Sidebar;
