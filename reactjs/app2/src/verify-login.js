import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { showError } from "./message";
import {FILE_NAME} from './common';

export default function VerifyLogin() {
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(FILE_NAME);
    useEffect(() => {
        if (cookies['id'] === undefined) {
            showError('login required');
            navigate("/");
        }
    });
}