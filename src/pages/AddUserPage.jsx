import { Container, Typography } from '@mui/material'
import AddUser from '@/components/addUser/AddUser';
import { HEADLINES } from '@/constants/labels';
import GoBack from '@/components/generalComps/GoBack';

export default function AddUserPage() {
    return (
        <Container maxWidth="md" sx={{ paddingY: 2 }}>
            <GoBack />

            <Typography variant="h3" component="h3" mb={4} textAlign={"center"}>
                {HEADLINES.ADDUSER}
            </Typography>

            <AddUser />

        </Container>
    )
}
