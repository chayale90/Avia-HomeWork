import { Container, Typography } from '@mui/material'
import UsersList from '../components/userList/UsersList'
import { HEADLINES } from '@/constants/labels';

export default function UsersPage() {
    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>

            <Typography variant="h3" component="h1" mb={4}>
            {HEADLINES.USERSLIST}
            </Typography>
            <UsersList />

        </Container>
    )
}
