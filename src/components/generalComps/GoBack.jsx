import { Button } from '@mui/material'
import { ChevronRightSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function GoBack() {
    const nav = useNavigate();

    return (
        <Button onClick={() => nav(-1)}>
            <ChevronRightSharp />
            חזור
        </Button>
    )
}
