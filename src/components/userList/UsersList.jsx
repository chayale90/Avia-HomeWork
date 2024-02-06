import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, } from "@mui/material";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { theme } from "@/theme/theme";
import ROUTES from '@/constants/routes';
import { PLANS, USER_PROPERTIES } from "@/constants/labels";
import { CSVLink } from "react-csv";
import debounce from 'lodash.debounce';
//project imports
import UserListCSS from "./UserList.module.css";
import Loading from "../generalComps/Loading";

export default function UsersList() {
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedPlan, setselectedPlan] = useState('');
  const { usersData, isReadJsonData } = useSelector(myStore => myStore.usersSlice);

  const handleChangeSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  const filteredUsers = usersData?.filter((user) => {
    return (
      (search === '' ||
        user.firstname.includes(search.trim()) ||
        user.lastname.includes(search.trim()) ||
        user.phone.includes(search.trim())) &&
      (selectedPlan === '' || user.plan === selectedPlan)
    );
  })

  const handleChangePlan = (e) => {
    setselectedPlan(e.target.value);
  }
  const textFieldStyles = { ...theme.textField.smallTextField };


  return (
    <>
      <Grid container className={UserListCSS.actionsTable}>
        <Box sx={{ width: { lg: "45%", xs: "100%" }, display: "flex", gap: 3 }}>
          <TextField
            onChange={(e) => { handleChangeSearch(e.target.value) }}
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

        <Box className={UserListCSS.btnsExportAdd} sx={{ marginTop: { xs: 2, lg: 0 } }}>
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
      {usersData.length === 0 ?
        <Loading display={!isReadJsonData ? "flex" : "none"} size="4rem" />
        :
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{USER_PROPERTIES.FIRSTNAME}</TableCell>
                <TableCell>{USER_PROPERTIES.LASTNAME}</TableCell>
                <TableCell>{USER_PROPERTIES.PHONE}</TableCell>
                <TableCell>{USER_PROPERTIES.EMAIL}</TableCell>
                <TableCell>{USER_PROPERTIES.PLAN}</TableCell>
                <TableCell>פרטים נוספים</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.plan}</TableCell>
                  <TableCell>
                    <Button variant="outlined"
                      onClick={() => { nav(ROUTES.USER_INFO + user.email) }}>
                      פרטים
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }

    </>
  );
}
