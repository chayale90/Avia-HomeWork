import { Stack, Typography, Container } from "@mui/material";

export default function Footer() {
    return (
        <Container sx={{ mt: 'auto'}}>
            <Stack sx={{ py: 2, display: 'flex', justifyContent: 'end', alignItems: 'center' }} direction={{ sm: "row" }}>
                <Typography variant="body2" gutterBottom={false}>
                     Avia © 2024 |{" "}
                    <a
                        href="https://www.aviahome.co.il/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Avia Home
                    </a>
                </Typography>
            </Stack>
        </Container>
    )
}
