import { store } from '../redux/store';
import { authApiSlice } from '../redux/api/authApiSlice';
import { shopApiSlice } from '../redux/api/shopApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    useEffect(() => {
        //* first argument is the rote which we wanna prefetch(rotes in notesApiSlice & userApiSlice)
        //* second argument is subscription name
        //@ts-ignore
        store.dispatch(authApiSlice.util.prefetch('refresh', 'user', { force: true }))
        store.dispatch(shopApiSlice.util.prefetch('getFavorates', 'favorateList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch
