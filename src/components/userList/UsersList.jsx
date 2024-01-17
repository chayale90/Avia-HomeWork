import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { theme } from "@/theme/theme";
import ROUTES from '@/constants/routes';
import { PLANS, USER_PROPERTIES } from "@/constants/labels";
import { CSVLink } from "react-csv";
import UserListCSS from "./UserList.module.css";

export default function UsersList() {
  const [search, setSearch] = useState('');
  const [selectedPlan, setselectedPlan] = useState('');
  const { usersData } = useSelector(myStore => myStore.usersSlice);
  const textFieldStyles = { ...theme.textField.smallTextField };
  
  console.log(usersData);

  const filteredUsers = usersData.filter((user) => {
    // לעשות מיננימום רינדור של קומפוננטה
    return (
      (search === '' ||
        user.firstname.includes(search.trim()) ||
        user.lastname.includes(search.trim()) ||
        user.phone.includes(search.trim())) &&
      (selectedPlan === '' || user.plan === selectedPlan)
    );
  });

  console.log("out");
  //  לבחוץ דיבאונס

  const handleChangePlan = (e) => {
    setselectedPlan(e.target.value);
  }

  return (
    <>
      <Grid container className={UserListCSS.actionsTable}>
        <Box sx={{ width: { lg: "45%", xs: "100%" }, display: "flex", gap: 3 }}>
          <TextField
            onChange={(e) => { setSearch(e.target.value) }}
            label="חיפוש לפי שם, שם משפחה, טלפון"
            variant="outlined"
            sx={textFieldStyles}
            fullWidth
          />

          <FormControl sx={textFieldStyles}>
            <InputLabel id="demo-simple-select-label">תוכנית</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedPlan}
              label="תוכנית"
              onChange={handleChangePlan}
              fullWidth
            >
              <MenuItem value="">כל התוכניות</MenuItem>
              {PLANS?.map((plan) => (
                <MenuItem key={plan.id} value={plan.name}>
                  {plan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box className={UserListCSS.btnsExportAdd} sx={{  marginTop: { xs: 2, lg: 0 } }}>
          <CSVLink
            data={usersData}
            filename={"Customers.csv"}
            target="_blank"
            className="btn-CSV"
          >
            <Button variant="outlined">
              ייצוא ל CSV
            </Button>
          </CSVLink>

          <Button variant="contained" component={RouterLink} to={ROUTES.ADD_USER} >הוסף לקוח</Button>
        </Box>

      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{USER_PROPERTIES.FIRSTNAME}</TableCell>
              <TableCell>{USER_PROPERTIES.LASTNAME}</TableCell>
              <TableCell>{USER_PROPERTIES.PHONE}</TableCell>
              <TableCell>{USER_PROPERTIES.EMAIL}</TableCell>
              <TableCell>{USER_PROPERTIES.PLAN}</TableCell>
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
