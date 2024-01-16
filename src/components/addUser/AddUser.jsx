import { Box, Grid, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { plans } from "@/constants/constansts";
import ROUTES from '@/constants/routeConstants';
export default function AddUser() {



    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedPlan, setSelectedPlan] = useState("");
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const [displayProgress, setDisplayProgress] = useState("none");

    const onSubForm = (formData) => {
        setDisplayProgress("flex");

        nav(ROUTES.HOME)

        console.log(formData);

    }
    
  return (
    <div>
        

        <form onSubmit={handleSubmit(onSubForm)}>
                <Grid container direction={"row"} justifyContent={"space-between"} marginTop={3} marginBottom={4}>
                    <Box width={"45%"}>
                        <TextField
                            {...register('firstName', {
                                required: { value: true, message: 'חובה למלא שם' },
                                pattern: { value: /^[a-zA-Zא-ת\s]+$/, message: 'שם חייב להכיל רק אותיות' },
                                minLength: { value: 2, message: 'שם חייב להיות לפחות 2 אותיות' },
                                maxLength: { value: 99, message: 'אורך השם חייב להיות עד 99 תווים' }
                            })}
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            label="שם פרטי"
                            size="small"
                        />
                        <FormHelperText error={!!errors.firstName}>
                            {errors.firstName && errors?.firstName?.message}
                        </FormHelperText>
                        <TextField
                            {...register('lastName', {
                                required: { value: true, message: 'חובה למלא שם משפחה' },
                                pattern: { value: /^[a-zA-Zא-ת\s]+$/, message: 'שם משפחה חייב להכיל רק אותיות' },
                                minLength: { value: 2, message: 'שם חייב להיות לפחות 2 אותיות' },
                                maxLength: { value: 99, message: 'אורך השם משפחה חייב להיות עד 99 תווים' }
                            })}
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            label="שם משפחה"
                            size="small"
                        />
                        <FormHelperText error={!!errors.lastName}>
                            {errors.lastName && errors?.lastName?.message}
                        </FormHelperText>
                    </Box>
                </Grid>

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
                        label="טלפון"
                        size="small"
                    />
                    <FormHelperText error={!!errors.phone}>
                        {errors.phone && errors?.phone?.message}
                    </FormHelperText>


                    <TextField
                        {...register('email', { required: true, pattern: regEmail, maxLength: 99 })}
                        fullWidth
                        size='small'
                        type="email"
                        label="מייל*"
                        variant="outlined"
                    />
                    <FormHelperText error={!!errors.email}>
                        {errors.email && errors?.email?.message}
                    </FormHelperText>
                </Box>

                <FormControl>
                    <InputLabel id="demo-simple-select-label">תוכנית</InputLabel>
                    <Select
                        {...register('plan', { required: true })}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedPlan}
                        label="תוכנית"
                        onChange={(e) => setSelectedPlan(e.target.value)}
                    >
                        {plans.map((plan, index) => (
                            <MenuItem key={index} value={plan}>
                                {plan}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>






            </form>
    </div>
  )
}
