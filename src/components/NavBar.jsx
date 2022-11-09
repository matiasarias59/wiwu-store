import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Logo';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';




const pages = [
  { label:"auriculares", link:"/category/auriculares"},
  { label:"cargadores", link:"/category/cargadores"},
  { label:"hubs", link:"/category/hubs"},
  { label:"mochilas", link:"/category/mochilas"},
  { label:"mouses", link:"/category/mouses"},
  { label:"pencil", link:"/category/pencil"},
  { label:"smartwatch", link:"/category/smartwatch"}, 
  { label:'Quienes Somos', link:"/quienes-somos"}, 
  { label:'Contacto', link:"/contacto"},

];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <Logo scale="3rem" />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={"/"} style={{textDecoration:"none"}}>
              WiWU Store
            </Link>
          </Typography>

          {<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {<IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} style={{textDecoration:"none"}}>
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={"/"} style={{textDecoration:"none"}}>
              WiWU Store
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.link} style={{textDecoration:"none"}}>
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
              </Link>
            ))}
          </Box>
        <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
