import { Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import { ChevronRightSharp } from "@mui/icons-material";
import ROUTES from '@/constants/routes';
import { Link as RouterLink } from 'react-router-dom';


export default function NotFound() {
    return (
        <div>
            <CssBaseline />
            <Container fixed>
                <Box textAlign={"center"} mt={4}>
                    <Typography variant="h2" component="h2" >
                        עמוד לא נמצא 404!
                    </Typography>
                    <Button component={RouterLink} sx={{marginTop:1}} to={ROUTES.HOME} >
                        <ChevronRightSharp />
                        חזרה לעמוד הבית
                    </Button>
                </Box>
            </Container>
        </div>
    )
}
