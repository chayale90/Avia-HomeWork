import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
//project imports
import { changeDarkMode } from "@/slices/darkModeSlice"
import manImg from '/images/man.png';
import Logo from '/images/logo.jpeg';

const Header = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector(myStore => myStore.darkModeSlice);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onVictoryClick = () => {
        toast.success("!בעזרת השם יחד ננצח ", {
            icon: "🚀"
        });
    }

    return (
        <>
            <AppBar position="static" sx={{ py: 1 }} color={darkMode === false ? 'primary' : 'darkMode'} >
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        {/* big screen */}
                        <Grid item >
                            <img src={Logo} alt="logo" width={50} style={{ borderRadius: "5px" }} />
                        </Grid>


                        <Box display={"flex"} gap={16}>
                            <Grid item sx={{ display: { xs: 'none', md: 'flex' }, px: 3, color: darkMode === true ? 'primary' : 'yellow' }}>
                                <Tooltip title={darkMode === false ? "החשך" : 'האר'}>
                                    <IconButton onClick={() => { dispatch(changeDarkMode()) }} color={darkMode ? "primary" : "inherit"}>
                                        {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
                                    </IconButton>
                                </Tooltip>
                            </Grid>


                            <Grid item>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Avatar" src={manImg} referrerPolicy="no-referrer" />
                                </IconButton>
                                <Menu
                                    sx={{ mt: 3 }}
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
                                    <MenuItem
                                        onClick={() => { dispatch(changeDarkMode()) }}
                                        sx={{
                                            display: { xs: 'block', md: 'none', px: 3 },
                                        }}
                                    >
                                        {darkMode === false ? "החשך" : 'האר'}
                                        <IconButton color="inherit">
                                            {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
                                        </IconButton>
                                    </MenuItem>
                                    <MenuItem onClick={onVictoryClick}>יחד ננצח!</MenuItem>
                                </Menu>
                            </Grid>
                        </Box>

                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
