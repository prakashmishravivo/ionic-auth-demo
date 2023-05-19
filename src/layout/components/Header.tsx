import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { pages, propTypes, settings } from "./common";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../routing/components/common";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header({ state, setState }: propTypes) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = () => {
    localStorage.removeItem("IONIC_DEMO");
    handleCloseUserMenu();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", borderBottom: "1px solid #fff" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                setState(true);
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page.toLowerCase()}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#fff",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {t(`${page}`)}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              sx={{
                border: "1px solid grey",
                margin: "0 1rem",
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
                margin: "0 1rem",
                padding: "0",
              }}
              onClick={() => {
                localStorage.setItem("LNG", JSON.stringify({ language: "hi" }));
                i18n.changeLanguage("hi");
              }}
            >
              {t(`हिन`)}
            </Button>
            <Button
              sx={{
                border: "1px solid grey",
                margin: "0 1rem",
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
          {isLoggedIn() ? (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      if (setting !== "Logout") handleCloseUserMenu();
                      else onClickLogout();
                    }}
                  >
                    {setting !== "Logout" ? (
                      <Link
                        to={setting.toLowerCase()}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <Typography textAlign="center">
                          {t(`${setting}`)}
                        </Typography>
                      </Link>
                    ) : (
                      <Typography textAlign="center">{t(`Logout`)}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
