import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../services/userService";
import { setUsers } from "../slices/usersSlice";
import { useEffect } from 'react';

export default function UseDataManager() {
    const dispatch = useDispatch();
    const { isReadJsonData } = useSelector(myStore => myStore.usersSlice);

    const getUsersData = async () => {
        try {
            const usersJson = await getUsers();
            dispatch(setUsers(usersJson));
        }
        catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        (!isReadJsonData) && getUsersData()
    }, []);

    return {
        isReadJsonData,
        getUsersData
    };
}
