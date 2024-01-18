import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../../services/userService";
import { setUsers } from "../../slices/usersSlice";

export default function ReadJsonData() {
    const dispatch = useDispatch();
    const {  isReadJsonData } = useSelector(myStore => myStore.usersSlice);

    const getUsersFromJSON = async () => {
        try {
            const usersJson = await getUsers();
            dispatch(setUsers(usersJson));
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        (!isReadJsonData) && getUsersFromJSON()
    }, [])

    return (
        <></>
    )
}
