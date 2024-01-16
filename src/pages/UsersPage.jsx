import { Container, Typography } from '@mui/material'
import UsersList from '../components/userList/UsersList'

export default function UsersPage() {
    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>

            <Typography variant="h3" component="h1" mb={4} textAlign={"center"}>
                רשימת לקוחות
            </Typography>
            <UsersList />

        </Container>
    )
}
