import { Container, Typography } from '@mui/material'
import { HEADLINES } from '@/constants/labels';
import UsersList from '@/components/userList/UsersList'

export default function UsersPage() {
    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>

            <Typography variant="h3" component="h1" mb={4} textAlign={"center"}>
                {HEADLINES.USERSLIST}
            </Typography>
            <UsersList />

        </Container>
    )
}
