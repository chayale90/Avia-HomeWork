import { Box, Grid, FormControl, CircularProgress, FormHelperText, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PLANS, USER_PROPERTIES } from "@/constants/labels";
import ROUTES from '@/constants/routes';
import "./adduser.css";
import users from "../../customers.json"
import { toast } from 'react-toastify';


export default function AddUser() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedPlan, setSelectedPlan] = useState("");
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const [displayProgress, setDisplayProgress] = useState("none");

    const onSubForm = (userData) => {
        setDisplayProgress("flex");

        users.push(userData);

        nav(ROUTES.HOME);
        toast.success("לקוח נוסף בהצלחה")
        console.log(users);
        // Code in this block will always run, whether there was an error or not
        setDisplayProgress("none");

    };


    return (
        <Box className="addUser">
          

            <form onSubmit={handleSubmit(onSubForm)}>
                <Grid container direction={"row"} justifyContent={"space-between"} marginY={4}>
                    <Box width={"45%"}>
                        <TextField
                            {...register('firstname', {
                                required: { value: true, message: 'חובה למלא שם' },
                                pattern: { value: /^[a-zA-Zא-ת\s]+$/, message: 'שם חייב להכיל רק אותיות' },
                                minLength: { value: 2, message: 'שם חייב להיות לפחות 2 אותיות' },
                                maxLength: { value: 99, message: 'אורך השם חייב להיות עד 99 תווים' }
                            })}
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            label={USER_PROPERTIES.FIRSTNAME}
                        />
                        <FormHelperText error={!!errors.firstname}>
                            {errors.firstname && errors?.firstname?.message}
                        </FormHelperText>
                    </Box>
                    <Box width={"45%"}>
                        <TextField
                            {...register('lastname', {
                                required: { value: true, message: 'חובה למלא שם משפחה' },
                                pattern: { value: /^[a-zA-Zא-ת\s]+$/, message: 'שם משפחה חייב להכיל רק אותיות' },
                                minLength: { value: 2, message: 'שם משפחה חייב להיות לפחות 2 אותיות' },
                                maxLength: { value: 99, message: 'אורך שם המשפחה חייב להיות עד 99 תווים' }
                            })}
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            label={USER_PROPERTIES.LASTNAME}
                        />
                        <FormHelperText error={!!errors.lastname}>
                            {errors.lastname && errors?.lastname?.message}
                        </FormHelperText>
                    </Box>
                </Grid>

                <Grid container direction={"row"} justifyContent={"space-between"} marginY={4}>
                    <Box width={"45%"}>
                        <TextField
                            {...register('phone', {
                                required: { value: true, message: 'חובה למלא טלפון' },
                                pattern: { value: /^[0-9]+$/, message: 'יש להזין ספרות בלבד' },
                                minLength: { value: 9, message: 'טלפון חייב להיות לפחות 9 אותיות' },
                                maxLength: { value: 10, message: 'אורך טלפון חייב להיות עד 10 תווים' }
                            })}
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            label={USER_PROPERTIES.PHONE}
                        />
                        <FormHelperText error={!!errors.phone}>
                            {errors.phone && errors?.phone?.message}
                        </FormHelperText>
                    </Box>
                    <Box width={"45%"}>
                        <TextField
                            {...register('email', { required: true, pattern: regEmail, maxLength: 99 })}
                            fullWidth
                            type="email"
                            label={USER_PROPERTIES.EMAIL + "*"}
                            variant="outlined"
                        />
                        <FormHelperText error={!!errors.email}>
                            {errors.email && errors?.email?.message}
                        </FormHelperText>
                    </Box>
                </Grid>

                <Grid container justifyContent="center">
                    <FormControl sx={{ width: "50%", my: 1, display: "center", justifyContent: "center" }}>
                        <InputLabel id="demo-simple-select-label">תוכנית</InputLabel>
                        <Select
                            {...register('plan', { required: true })}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedPlan}
                            label={USER_PROPERTIES.PLAN}
                            onChange={(e) => setSelectedPlan(e.target.value)}
                        >
                            {PLANS.map((plan) => (
                                <MenuItem key={plan.id} value={plan.name}>
                                    {plan.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Button
                    className="btnSubmit"
                    type='submit'
                    variant="contained"
                    endIcon={<CircularProgress sx={{ display: displayProgress }} size={"1rem"} color="success" />}
                >
                    הוסף
                </Button>
            </form>
        </Box>
    )
}
