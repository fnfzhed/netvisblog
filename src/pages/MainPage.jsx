import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import SidePanel from "./notebook/SidePanel";
import MainEditor from "./editor/MainEditor";
import Header from "./Header";


export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <SidePanel/>
                </Grid>
                <Grid item xs={9}>
                    <MainEditor/>
                </Grid>
            </Grid>
        </Box>
    );
}
