import { Container, Typography } from '@mui/material'
import { HEADLINES } from '@/constants/labels';
import UsersList from '@/components/userList/UsersList'
import UseDataManager from '@/hooks/useDataManager';

export default function UsersPage() {

    UseDataManager();

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>

            <Typography variant="h3" component="h1" mb={4} textAlign={"center"}>
                {HEADLINES.USERSLIST}
            </Typography>
            <UsersList />

        </Container>
    )
}
