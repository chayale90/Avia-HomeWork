import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, } from "@mui/material";
import { useState } from "react";
import { theme } from "@/theme/theme";
import { plans } from "@/constants/constansts.js"
import ROUTES from '@/constants/routeConstants';
import users from "../../customers.json"
import { Link as RouterLink } from 'react-router-dom';

export default function UsersList() {
  const [search, setSearch] = useState('');
  const [selectedPlan, setselectedPlan] = useState('');

  const filteredUsers = users.filter((user) => {
    return (
      (search === '' ||
        user.firstname.includes(search.trim()) ||
        user.lastname.includes(search.trim()) ||
        user.phone.includes(search.trim())) &&
      (selectedPlan === '' || user.plan === selectedPlan)
    );
  });

  const handleChangePlan = (e) => {
    setselectedPlan(e.target.value);
  }

  const textFieldStyles = { ...theme.textField.smallTextField };
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center" marginY={3}>
        <Box sx={{ width: { lg: "70%", xs: "100%" }, display: "flex", gap: 3 }}>
          <TextField
            onChange={(e) => { setSearch(e.target.value) }}
            label="חיפוש לפי שם, שם משפחה, טלפון"
            variant="outlined"
            sx={textFieldStyles}
          />

          <FormControl sx={textFieldStyles}>
            <InputLabel id="demo-simple-select-label">תוכנית</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedPlan}
              label="תוכנית"
              onChange={handleChangePlan}
            >
              <MenuItem value="">כל התוכניות</MenuItem>
              {plans?.map((plan, index) => (
                <MenuItem key={index} value={plan}>
                  {plan}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: { xs: 2, lg: 0 } }}>
          <Button component={RouterLink} variant="outlined" to={ROUTES.ADD_USER} >הוסף לקוח</Button>
          <Button variant="contained">ייצוא ל SCV</Button>
        </Box>

      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>שם פרטי</TableCell>
              <TableCell>שם משפחה</TableCell>
              <TableCell>טלפון</TableCell>
              <TableCell>מייל</TableCell>
              <TableCell>תכנית</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.plan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}
