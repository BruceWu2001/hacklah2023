import { Box, Divider, Typography, useTheme, TextField, Button} from "@mui/material"
import { useState } from "react"
import { Formik, Field } from "formik";


const Display = ({comments}) => {
    console.log(comments)
    return (comments.map(comment => {
        return (
        <Box key={comment} width="100%">
            <Typography>{comment}</Typography>
            <Divider sx={{ height:10, m:0.5 }} orientation="horizontal"/>
        </Box>
    )
    }))
}

const CommentSection = () => {
    const [comments, setComments] = useState([])

    const handleFormSubmit = ({comment}) => {
        setComments([...comments, comment])
    }
    
    const initialValues={
                    comment: "",
                    };

    return (<Box width="35%" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
    <Typography variant="h3">Comment section</Typography>
    <Box  display="flex" width="75%" flexDirection="column" height="60%"> 
        <Divider sx={{ height:28, m:0.5 }} orientation="horizontal"/>
        <br/>
        <br/>
        <Typography>Comment 1</Typography>
        <Divider sx={{ height:10, m:0.5 }} orientation="horizontal"/>
        <Typography>Comment 2, I agree with this view, however...</Typography>
        <Divider sx={{ height:10, m:0.5 }} orientation="horizontal"/>
        <Display comments={comments}/>
    </Box>
    
    {/* input comments here */}
    <Box width="100%">
    <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                >
                {
                ({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>

                        <Box width="100%" display="flex" flexDirection="column">
                            <TextField
                            variant="filled"
                            label="comment"
                            name="comment"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.argument}
                            error={!!touched.argument && !!errors.argument}
                            helperText={touched.argument && errors.argument}
                            multiline
                            rows="5"
                            >
                            </TextField>
                        </Box>

                    <Button type="submit" variant="contained" color="secondary">
                        Add comment 
                    </Button>
                    </form>
    
                )
                }
                </Formik>
    </Box>
</Box>);
}

export default CommentSection;