import {Link} from "react-router-dom"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
const Nav = (props) => {
    return (
        <>
            <Stack direction='row' spacing={2}>
                <Button component={Link} to="/">Home</Button>
                <Button component={Link} to="/about">About</Button>
                <Button component={Link} to="/login">Login</Button>
                <Button component={Link} to="/register">Register</Button>
            </Stack>
        </>
    )
}
export default Nav