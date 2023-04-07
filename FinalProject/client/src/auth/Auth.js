import { useDispatch } from "react-redux";
import { setToken } from "../actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode';
// import axios from 'axios';

export const Auth = (props) => {
    const navigate = useNavigate();
    useEffect (
        () => {
            const verify = async () => {
            const res = await fetch('api/users/token');
            if (res.ok !== true) {
                navigate('/login')
            } else {
                const data = await res.json()
                const token = data.accessToken;
                const decode = jwt_decode(token);
                // set smth with useState return <Player> / <Admin> 
                console.log(decode)
            }
        }
    verify()}, []
    )
    return props.children

}