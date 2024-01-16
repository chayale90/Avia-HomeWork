import { Container, Typography } from '@mui/material'
import AddUser from '../components/addUser/AddUser';


export default function AddUserPage() {

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Typography variant="h3" component="h3" mb={4} textAlign={"center"}>
                הוספת לקוח
            </Typography>

            <AddUser />

        </Container>
    )
}
