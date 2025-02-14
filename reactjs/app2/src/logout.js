import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { showError, showMessage } from "./message";
import { FILE_NAME } from './common';
export default function Logout() {
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(FILE_NAME);
    useEffect(() => {
        //remove cookie
        removeCookie('id');
        showMessage('logout successfull');
        navigate("/");
    });
}