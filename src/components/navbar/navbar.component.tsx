import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import TabIcon from '../../assets/icons/tab-icon.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme-slice';
import { RootState } from '../../redux/store';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth-slice';

const settings = ['Profile', 'Logout'];

export default function NavBar() {

    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch()
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const location = useLocation();

    const isLoginPage = location.pathname === "/login" || location.pathname === "/fobidden" || location.pathname === "/notfound" ;
  
    const renderNavBar = !isLoginPage;

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {

        dispatch(logout());

        navigate('/login');

        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  >
                <Toolbar>
                    <TabIcon height='50' width='50' color='white' />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={() => dispatch(toggleTheme())}
                    />

                    {renderNavBar &&  <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>}
                   
                </Toolbar>
            </AppBar>
        </Box>
    );
}


