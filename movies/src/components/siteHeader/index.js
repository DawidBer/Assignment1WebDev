import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MovieIcon from '@mui/icons-material/Movie';
import LoginIcon from '@mui/icons-material/Login';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import PersonIcon from '@mui/icons-material/Person';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // Subscribe to the Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Latest", path: "/movies/latest" },
    { label: "Trending", path: "/movies/trending" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Login", path: "/signin" },
    { label: "Create Account", path: "/signup" },
  ];

  const handleMenuSelect = (pageURL) => {
    if (pageURL === "/logout") {
      signOut(auth).then(() => {
        navigate("/login");
      });
    } else {
      navigate(pageURL, { replace: true });
    }
    setAnchorEl(null);
  };

  // const handleMenuSelect = (pageURL) => {
  // navigate(pageURL, { replace: true });
  //};

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 'auto' }}>
            {user ? (
              <>
                <IconButton onClick={() => handleMenuSelect("/profile")} color="inherit">
                  <PersonIcon />
                  <Typography variant="caption">Profile</Typography>
                </IconButton>
                <IconButton onClick={() => handleMenuSelect("/logout")} color="inherit">
                  <LoginIcon />
                  <Typography variant="caption">Logout</Typography>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => handleMenuSelect("/signin")} color="inherit">
                  <LoginIcon />
                  <Typography variant="caption">Login</Typography>
                </IconButton>
                <IconButton onClick={() => handleMenuSelect("/signup")} color="inherit">
                  <EditNoteIcon />
                  <Typography variant="caption">Signup</Typography>
                </IconButton>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;