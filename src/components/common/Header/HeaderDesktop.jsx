import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import { ROUTE_LIST } from 'utils';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Link as MuiLink } from '@mui/material';

export function HeaderDesktop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#fff',
          color: 'text.primary',
          boxShadow: 'none',
          borderBottom: '1px solid #eee',
        }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', py: 2 }}>
          <MuiLink
            component={Link}
            to="/"
            underline="none"
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'text.primary' }}
          >
            <Logo sx={{ mr: 1 }} />

            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{ display: { xs: 'none', sm: 'block' }, textDecoration: 'none' }}
            >
              ReactStore
            </Typography>
          </MuiLink>

          <SearchBar />

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {ROUTE_LIST.map((route) => (
              <MuiLink
                component={Link}
                to={route.path}
                key={route.path}
                underline="none"
                sx={{ my: 2, display: 'block' }}
              >
                <Button>{route.label}</Button>
              </MuiLink>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
