import React from 'react'
import { BiUserCircle} from "react-icons/bi";


const AccountWidget = () => {
    return (
        <a className='nav-link d-flex flex-row mx-3 text-light'>
            <BiUserCircle className='text-light h4 me-1 font-weight-bold'/>
            Mi Cuenta
        </a>
    )
}

export default AccountWidget