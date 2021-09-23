import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import { } from '@mui/material';
// import { Component } from './Header.style';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <AppBar position={'sticky'}>
            <Toolbar
                component={Container}
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
                <Typography component={'h1'} variant={'h5'}>
                    <i className={'fas fa-theater-masks'} />
                    &nbsp;Dad <strong>Jokes</strong>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
