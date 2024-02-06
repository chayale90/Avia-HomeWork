import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import { USER_PROPERTIES } from "@/constants/labels";
import UserInfoCSS from "./UserInfo.module.css";
import { getUserByEmail } from "@/services/userService";
import Loading from "../generalComps/Loading";

export default function UserInfo() {
    const { email } = useParams();
    const [currentUser, setCurrentUser] = useState();
    const [displayProgress, setDisplayProgress] = useState(true);

    useEffect(() => {
        const getUserInfo = async () => {
            setDisplayProgress(true);
            try {
                let user = await getUserByEmail(email);
                setCurrentUser(user);
            } catch (err) {
                console.log(err);
            } finally {
                setDisplayProgress(false);
            }
        };
        getUserInfo();
    }, [email]);

    const userProperties = [
        { id: 1, label: USER_PROPERTIES.FIRSTNAME, key: "firstname" },
        { id: 2, label: USER_PROPERTIES.LASTNAME, key: "lastname" },
        { id: 3, label: USER_PROPERTIES.EMAIL, key: "email" },
        { id: 4, label: USER_PROPERTIES.PHONE, key: "phone" },
        { id: 5, label: USER_PROPERTIES.PLAN, key: "plan" },
    ];

    return (
        <>
            {displayProgress && <Loading display="flex" size="4rem" />}

            {!displayProgress && (
                <Box sx={{ width: { xs: '90%', md: '60%' } }}
                    className={UserInfoCSS.userInfoContainer}
                >
                    {userProperties.map((property) => (
                        <Typography key={property.id} mb={2}>
                            {property.label}: {currentUser?.[property.key]}
                        </Typography>
                    ))}
                </Box>
            )}
        </>
    );
}
