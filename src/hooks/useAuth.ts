import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../redux/authSlice"
import jwtDecode from 'jwt-decode'

type UserInfoType= {
    UserInfo: {
        username: string,
        email: string,
    }
}

const useAuth = () => {
    const token = useSelector(selectCurrentToken)

    if (token) {
        const decoded: UserInfoType = jwtDecode(token)
        const { username } = decoded.UserInfo


        return { username }
    } else {
        return { username: null }
    } 
}
export default useAuth