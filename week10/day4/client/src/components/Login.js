import { useState, useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import Box from "@mui/material/Box"
import  TextField  from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { AppContext } from "../App"
import axios from 'axios'


const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [msg, setMsg] = useState ('');
    const navigate = useNavigate();
    const {setAccessToken} = useContext(AppContext)

    const handleAction = async (id) => {
        if (id == "Register") {
            try {
                let response = await axios.post('/register', {email, password})

                setMsg(response.data.msg)
                console.log(response.data)
            } catch (error) {
                console.log(error.response.data)
            }

        }
    }
    return (
        <>
        <h1>{props.title}</h1>
        <Box component="form" sx={{m:1}}>
            <TextField sx={{m:1}} id="email" label="Enter Email" variant='outlined' onChange={(e) => setEmail(e.target.value)}/>
            <TextField sx={{m:1}} id="password" label="Enter Passsword" variant='outlined' onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="container" onClick={() => handleAction(props.title)}>{props.title}</Button>
        </Box>
        <p>{msg}</p>
        
        </>
    )
}
export default Login