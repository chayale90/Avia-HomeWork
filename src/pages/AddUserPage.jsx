import { Button, Container, Typography } from '@mui/material'
import AddUser from '@/components/addUser/AddUser';
import { HEADLINES } from '@/constants/labels';
import { useNavigate } from 'react-router-dom';
import { ChevronRightSharp } from '@mui/icons-material';

export default function AddUserPage() {
    const nav = useNavigate();
    return (
        <Container maxWidth="md" sx={{ paddingY: 4 }}>
            <Button
                sx={{ marginTop: 1 }}
                onClick={() => nav(-1)}
            >
                <ChevronRightSharp />
                חזור
            </Button>
            <Typography variant="h3" component="h3" mb={4} textAlign={"center"}>
                {HEADLINES.ADDUSER}
            </Typography>

            <AddUser />

        </Container>
    )
}
