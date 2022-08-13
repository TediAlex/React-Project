import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as  userService  from "../../services/userService";
export const Logout =() => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserContext);

    useEffect(() => {
        userService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}