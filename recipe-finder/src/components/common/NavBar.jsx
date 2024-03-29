import {Menu} from  'semantic-ui-react';
// import { logo } from '../../constants/constants';
import { Link } from 'react-router-dom';

const NavBar=()=> {
    return ( 
       <Menu borderless fixed="top" >
       
        <Menu.Item name="Home" as ={Link} to="/"/>
        <Menu.Item name="Recipe" as ={Link} to="/recipes"/>
       </Menu>
    )
}
export default NavBar;