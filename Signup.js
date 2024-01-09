import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav'
import './Login.css'
export default function Signup(){
    return(
        <div>
            <Nav/>
            <div className='div1'>
            
            <div className='div2'>
            <Stack spacing={2} direction="column">
                <h1>Wellcome back</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" className='textfeild'/>
            <TextField id="outlined-basic" label="Email" variant="outlined" className='textfeild'/>
            <TextField id="outlined-basic" label="Password" variant="outlined" className='textfeild'/>
            <Button variant="contained">Signup</Button>
            </Stack>
            </div>
        </div>
        </div>
    )
}