import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../services/userService";
import { setUsers } from "../slices/usersSlice";

export default function UseDataManager() {
    const dispatch = useDispatch();
    const { isReadJsonData } = useSelector(myStore => myStore.usersSlice);

    useEffect(() => {
        (!isReadJsonData) && getUsersData()
    }, []);

    const getUsersData = async () => {
        try {
            const usersJson = await getUsers();
            dispatch(setUsers(usersJson));
        }
        catch (err) {
            console.log(err);
        }
    }

    return { isReadJsonData, getUsersData };
}
