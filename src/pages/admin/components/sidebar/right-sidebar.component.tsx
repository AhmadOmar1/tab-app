import React, { useState } from 'react';
import { Box, Drawer, IconButton, Paper, useTheme } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

type RightSideProps = {
    children: React.ReactNode;
    onClick: () => void;
    open: boolean;
};




const RightSidebar: React.FC<RightSideProps> = ({
    onClick,
    open,
    children
}) => {

    return (
        <>
            <Drawer
                anchor="right"
                open={open}
                onClose={onClick}

                sx={{
                    '& .MuiDrawer-paper': {
                        width: {
                            xs: '100%',
                            sm: '80%',
                            md: '50%',
                            lg: '40%',
                        },
                    },

                }}
            >
                <Paper sx={{
                    minHeight: '100vh',
                    pt: 12,
                }}>
                    <IconButton
                        onClick={onClick}
                        edge={'start'}
                        sx={{
                            ml:2,
                            bgcolor: useTheme().palette.primary.contrastText
                        }}


                    >   <ChevronRight />
                    </IconButton>
                        {children}
                </Paper>
            </Drawer>
        </>
    );
};

export default RightSidebar;
