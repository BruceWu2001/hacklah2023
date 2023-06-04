
import { tokens } from "../../theme";
import { Box, Divider, Typography, useTheme } from "@mui/material"
import { useState, useRef } from "react";
import { useLocation } from 'react-router-dom'
import CommentSection from "../../components/CommentSection";



const DisplayArgument = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const location = useLocation()
    const { url, argument } = location.state
    const newUrl = url.substring(0, url.length)

    return (<Box display="flex" justifyContent="space-between">
                <Box width="60%" display="flex" flexDirection="column" alignItems="center">
                    <iframe src={`${newUrl}/embed`} 
                    allowtransparency="true" width="800" 
                    height="600"  allowFullScreen></iframe>

                    <Box display="flex" flexDirection="column">
                        <Typography variant="h3">Argument</Typography>
                        <Typography variant="h6">{argument}</Typography>
                    </Box>
                </Box>

                <CommentSection/>

        </Box>)
}
export default DisplayArgument;