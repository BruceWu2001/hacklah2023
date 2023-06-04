
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material"
import { useState, useRef, useEffect } from "react";
import SubmissionItem from "../../components/SubmissionItem";



const load_storage = () => {
    const pre = [
        {url : "https://scratch.mit.edu/projects/861046280", argument : "According to the exploitative principle, which Feinberg regards as the last best hope for legal moralism, certain types of unjust exploitation are free‐floating evils substantial enough to warrant criminal prohibitions. To this defense of legal moralism, Feinberg offers several replies: (1) some acts of apparently free‐floating exploitation like insider‐trading, which generate unjust gain for the exploiter, actually involve rights‐violating harm; (2) limited forms of certain types of exploitation should be decriminalized, like fortune‐telling for entertainment, or isolated instances of ticket‐scalping. Combining these two replies, Feinberg responds to the legal moralist on the issue of blackmail (a crime that involves threatening to do what one has a legal right to do anyway unless some demand, which one has a legal right to make, is granted by the victim). Feinberg, Joel, 'The Exploitation Principle: Preventing Wrongful Gain', The Moral Limits of the Criminal Law Volume 4: Harmless Wrongdoing (New York, 1990; online edn, Oxford Academic, 1 Nov. 2003), https://doi.org/10.1093/0195064704.003.0006, accessed 4 June 2023."},
        {url : "https://scratch.mit.edu/projects/861046280", argument : "According to the exploitative principle, which Feinberg regards as the last best hope for legal moralism, certain types of unjust exploitation are free‐floating evils substantial enough to warrant criminal prohibitions. To this defense of legal moralism, Feinberg offers several replies: (1) some acts of apparently free‐floating exploitation like insider‐trading, which generate unjust gain for the exploiter, actually involve rights‐violating harm; (2) limited forms of certain types of exploitation should be decriminalized, like fortune‐telling for entertainment, or isolated instances of ticket‐scalping. Combining these two replies, Feinberg responds to the legal moralist on the issue of blackmail (a crime that involves threatening to do what one has a legal right to do anyway unless some demand, which one has a legal right to make, is granted by the victim). Feinberg, Joel, 'The Exploitation Principle: Preventing Wrongful Gain', The Moral Limits of the Criminal Law Volume 4: Harmless Wrongdoing (New York, 1990; online edn, Oxford Academic, 1 Nov. 2003), https://doi.org/10.1093/0195064704.003.0006, accessed 4 June 2023."},
        {url : "https://scratch.mit.edu/projects/861046280", argument : "According to the exploitative principle, which Feinberg regards as the last best hope for legal moralism, certain types of unjust exploitation are free‐floating evils substantial enough to warrant criminal prohibitions. To this defense of legal moralism, Feinberg offers several replies: (1) some acts of apparently free‐floating exploitation like insider‐trading, which generate unjust gain for the exploiter, actually involve rights‐violating harm; (2) limited forms of certain types of exploitation should be decriminalized, like fortune‐telling for entertainment, or isolated instances of ticket‐scalping. Combining these two replies, Feinberg responds to the legal moralist on the issue of blackmail (a crime that involves threatening to do what one has a legal right to do anyway unless some demand, which one has a legal right to make, is granted by the victim). Feinberg, Joel, 'The Exploitation Principle: Preventing Wrongful Gain', The Moral Limits of the Criminal Law Volume 4: Harmless Wrongdoing (New York, 1990; online edn, Oxford Academic, 1 Nov. 2003), https://doi.org/10.1093/0195064704.003.0006, accessed 4 June 2023."},
        {url : "https://scratch.mit.edu/projects/861046280", argument : "According to the exploitative principle, which Feinberg regards as the last best hope for legal moralism, certain types of unjust exploitation are free‐floating evils substantial enough to warrant criminal prohibitions. To this defense of legal moralism, Feinberg offers several replies: (1) some acts of apparently free‐floating exploitation like insider‐trading, which generate unjust gain for the exploiter, actually involve rights‐violating harm; (2) limited forms of certain types of exploitation should be decriminalized, like fortune‐telling for entertainment, or isolated instances of ticket‐scalping. Combining these two replies, Feinberg responds to the legal moralist on the issue of blackmail (a crime that involves threatening to do what one has a legal right to do anyway unless some demand, which one has a legal right to make, is granted by the victim). Feinberg, Joel, 'The Exploitation Principle: Preventing Wrongful Gain', The Moral Limits of the Criminal Law Volume 4: Harmless Wrongdoing (New York, 1990; online edn, Oxford Academic, 1 Nov. 2003), https://doi.org/10.1093/0195064704.003.0006, accessed 4 June 2023."},
        {url : "https://scratch.mit.edu/projects/861046280", argument : "According to the exploitative principle, which Feinberg regards as the last best hope for legal moralism, certain types of unjust exploitation are free‐floating evils substantial enough to warrant criminal prohibitions. To this defense of legal moralism, Feinberg offers several replies: (1) some acts of apparently free‐floating exploitation like insider‐trading, which generate unjust gain for the exploiter, actually involve rights‐violating harm; (2) limited forms of certain types of exploitation should be decriminalized, like fortune‐telling for entertainment, or isolated instances of ticket‐scalping. Combining these two replies, Feinberg responds to the legal moralist on the issue of blackmail (a crime that involves threatening to do what one has a legal right to do anyway unless some demand, which one has a legal right to make, is granted by the victim). Feinberg, Joel, 'The Exploitation Principle: Preventing Wrongful Gain', The Moral Limits of the Criminal Law Volume 4: Harmless Wrongdoing (New York, 1990; online edn, Oxford Academic, 1 Nov. 2003), https://doi.org/10.1093/0195064704.003.0006, accessed 4 June 2023."},
    ]
    for (let x = 0; x < pre.length; x++) {
        let element = pre[x];
        localStorage.setItem(x,JSON.stringify(element));
    }
}
const get_storage = () => {
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    
    while ( i-- ) {
        console.log(localStorage.getItem(keys[i]))
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
}


const List = ({submissions}) => {
    const ref = useRef(0);

    return (
        <Box   m="0 auto" 
        display="grid" 
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%">
        {submissions.map((submission) => {
            ref.current= ref.current + 1
            return <Box key={ref.current}> 
                <SubmissionItem submission={submission} id={ref.current}></SubmissionItem>
            </Box>
        })}
        </Box>
    )
}

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // localStorage.clear()
    load_storage()
    
    

    return <Box width="100%">
        <Typography 
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
        >Topic: </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>Exploitation </Typography>
        <br></br>
        <Typography>Submissions</Typography>
        <Box gridTemplateRows="3" m="10px auto">
            <List submissions={get_storage()}/>
        </Box>
    </Box>
}
export default Home;