import { Container, Typography } from '@mui/material'
import { HEADLINES } from '@/constants/labels'
import UserInfo from '@/components/userInfo/UserInfo'
import GoBack from '@/components/generalComps/GoBack';

export default function UserInfoPage() {

    return (
        <Container maxWidth="md" sx={{ paddingY: 4 }}>
            <GoBack />
            <Typography variant="h3" component="h1" mb={4} textAlign={"center"}>
                {HEADLINES.USERINFO}
            </Typography>

            <UserInfo />

        </Container>
    )
}
