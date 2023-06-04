
import { tokens } from "../../theme";
import { Box, TextField, Typography, useTheme,Button } from "@mui/material"
import { useState } from "react";
import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";

const Upload = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const [ count, setCount ] = useState(6)
    const handleFormSubmit = (values) => {
        const url = values.project_link;
        const argument = values.argument;
        const obj = {url : url,argument : argument}
        console.log("__________")
        console.log("__________")
        console.log(url);
        console.log(obj)
        localStorage.setItem(count, JSON.stringify(obj))
        setCount(count + 1)
        navigate("/")
    }
    
    const initialValues={
                    project_link: "",
                    argument : "",
                    };

    return (
        <Box m="20px" width="100%">
            <Box m="10px 0 0 10px">
                <Typography variant="h5" color={colors.greenAccent[400]}>Try to create a short animation that matches your argument </Typography>             </Box>
            <Box>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                >
    
                {
                ({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                    <Box
                    display="grid"
                    rowGap="30px"
                    gridTemplateRows="1fr 7fr">
    
                    
                        <Box width="100%" display="flex" flexDirection="column">
                            <TextField
                            variant="filled"
                            label="project_link"
                            name="project_link"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.project_link}
                            error={!!touched.project_link && !!errors.project_link}
                            helperText={touched.project_link && errors.project_link}
                            >
                            </TextField>
                        
                        </Box>
                        <Box width="100%" display="flex" flexDirection="column">
                            <TextField
                            variant="filled"
                            label="argument"
                            name="argument"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.argument}
                            error={!!touched.argument && !!errors.argument}
                            helperText={touched.argument && errors.argument}
                            multiline
                            rows="15"
                            >
                            </TextField>
                        </Box>
                 
    
                        
                    </Box>
    
                    <Button type="submit" variant="contained" color="secondary">
                        Submit 
                    </Button>
                    </form>
    
                )
                }
                </Formik>
            </Box>
        </Box>);
}
export default Upload;