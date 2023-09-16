import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Login from '../login';
import Project from '../Project';
import AddProject from '../AddProject';
import BADashboard from '../DashBoard/DashBoard';

// const pages = ['Login', 'Signup'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <><AppBar position="sticky" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        className='rounded shadow p-2'
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            bgcolor: 'white',
                            textDecoration: 'none',
                        }}
                        
                    >
                        Boiler Plate
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
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
                            <Button variant='text'>LogIn</Button>
                            <br />
                            <Button variant='text'>SignUp</Button>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            marginLeft: 5,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Boiler Plate
                    </Typography>
                    <Box className='ms-auto'>
                        <Link to={'login'}>
                            <Button

                                sx={{mx: 3, my: 2, px: 2, color: 'Red', backgroundColor: "white" }}
                            >
                                LogIn
                            </Button>
                        </Link>
                        <Link to={'signup'}>
                            <Button

                                sx={{ mx: 3, my: 2, px: 2, color: 'Red', backgroundColor: "white" }}
                            >
                                SignUp
                            </Button>
                        </Link>
                        <Link to={'projet'}>
                            <Button

                                sx={{ mx: 3, my: 2, px: 2, color: 'Red', backgroundColor: "white" }}
                            >
                                Project
                            </Button>
                        </Link>
                        <Link to={'AddProject'}>
                            <Button

                                sx={{ mx: 3, my: 2, px: 2, color: 'Red', backgroundColor: "white" }}
                            >
                                AddProject
                            </Button>
                            
                        </Link>
                        <Link to={'BADashboard'}>
                            <Button

                                sx={{ mx: 3, my: 2, px: 2, color: 'Red', backgroundColor: "white" }}
                            >
                                DASHBOARD
                            </Button>

                        </Link>
                    </Box>




                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}
export default Navbar;