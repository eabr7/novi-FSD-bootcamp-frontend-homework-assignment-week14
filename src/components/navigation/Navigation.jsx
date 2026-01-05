import './Navigation.css'
import {NavLink} from 'react-router-dom';
import logoNav from '../../assets/logo-medium.png';


function Navigation() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img src={logoNav} alt="Company logo" className="nav-logo"/>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/posts">Alle blogposts</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/newpost">Nieuwe blogpost aanmaken</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;