import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav(){
    return(
        <div>
            <nav className="navbar">
            <div className='logo'>
                        <span><b><i>plan home A-Z</i></b></span>
                   </div>
                <ul>
                   
                    
                    <li className="li">
                        <Link className='lin' to={'/'} >Home</Link>
                    </li>
                    <li className="li">
                        <Link className='lin' to={'/about'}>About</Link>
                    </li>
                    <li className="li">
                        <Link className='lin' to={'/contact'}>Contact</Link>
                    </li>
                    <li className='li'>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li className='li'>
                        <Link to={'/signup'}>Signup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}