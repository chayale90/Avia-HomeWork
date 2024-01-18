import { Box, CircularProgress } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Loading({display,size}) {
    return (
        <Box sx={{ display: display, alignItems: "center"}}>
            <Box sx={{ margin: "0 auto" }}>
                <CircularProgress size={size} />
            </Box>
        </Box>
    )
}
