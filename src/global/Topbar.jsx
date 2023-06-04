import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //here we get all the colors from the current theme
    const colorMode = useContext(ColorModeContext)
    // here we apply our default context

    const navigate = useNavigate();


    return <Box display="flex" justifyContent="space-between" padding={2}>
        {/* search bar */}

        <Box display="flex" width="40%" justifyContent="space-around">
           <Box onClick={() => navigate("/")} sx={{
            '&:hover' : {cursor : "pointer"}
        }}>
                <Typography variant="h3">Home</Typography>
           </Box>
           <Box onClick={() => navigate("/upload")} sx={{
            '&:hover' : {cursor : "pointer"}
        }}>
                <Typography variant="h3">Upload</Typography>
           </Box>

           <Box>
                <IconButton variant="contained" color="secondary" href="https://scratch.mit.edu/">
                    <IosShareOutlinedIcon/>
                    <Typography>
                            GO TO SCRATCH
                    </Typography>
                </IconButton>
           </Box>
        </Box>

        
        
        {/* icons */}
        <Box display="flex">
            <IconButton type="button" sx={{ p: 1}} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>) }
                
            </IconButton>
            <IconButton type="button" sx={{ p: 1}}>
                <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
            </IconButton>
            
            <IconButton type="button" sx={{ p: 1}}>
                <SettingsOutlinedIcon></SettingsOutlinedIcon>

            </IconButton>
            <IconButton type="button" sx={{ p: 1}}>
                <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            </IconButton>
        </Box>

    </Box>
}

export default Topbar;