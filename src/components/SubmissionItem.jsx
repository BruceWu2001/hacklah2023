import { useState } from "react";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom"


const SubmissionItem = ({ submission ,width="300px",id }) => {
    const link = submission.url;
    const argument = submission.argument;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isHovered, setIsHovered] = useState(false);

    
    const newUrl = link.substring(0, link.length)
    console.log(newUrl)
    
    return (<Box 
    width={width} height="400px"
    onMouseOver={() => setIsHovered(true)}
    onMouseOut={() => setIsHovered(false)}>
        <Box 
        position="relative"
        >
            {/* <img
            alt="load failed"
            width="300px"
            height="300px"
            src={"../assets/hacklah_1.png"}
            style={{ cursor: "pointer" }}
            /> */}

        <iframe src={`${newUrl}/embed`} 
        allowtransparency="true" width="300" 
        height="300"  allowFullScreen></iframe>
            
        </Box>

        <Box mt="3px">
            <Typography variant="subtitle2"> 
                   name of student
            </Typography>
        </Box>
         <Box 
            display={isHovered ? "block" : "none"}
            width="100%"
            >
            <Button color="secondary" sx={{ backgroundColor: colors.grey[100] }}> 
                <Link to={`/displayArgument/${id}`} state={{url: link , argument : argument}}>view argument</Link>
            </Button>
            </Box>
    </Box>);
}

export default SubmissionItem;
