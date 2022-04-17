import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <div className=' sticky top-0 z-50  shadow-md bg-white '>

            <nav className='  flex items-center justify-between  w-full md:w-10/12 mx-auto' >
                <div className='p-1'>
                    <img width={140} src="logo.png" alt="" />
                </div>
                <ul className='flex items-center gap-4'>
                    {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}

                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to='/'>HOME</Link>
                    </li>

                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to='/about'>ABOUT</Link>
                    </li>

                    <li className={splitLocation[1] === "contacts" ? "active" : ""}>
                        <Link to="/contacts">CONTACTS</Link>
                    </li>

                    {
                        user?.uid ? <li onClick={handleLogOut}>
                            <Link to="/home">LOGOUT</Link>
                        </li>
                            : <li className={splitLocation[1] === "login" ? "active" : ""}>
                                <Link to="/login">LOGIN</Link>
                            </li>
                    }

                </ul>
            </nav>



        </div>
    )
}

export default Header