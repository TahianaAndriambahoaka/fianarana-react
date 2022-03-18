import logo from 'images/logo.png';
import 'styles/Header.css';
function Header(){
    return(
        <div className='Header'>
            <div className='logo-section'>
                <img src={logo} alt='' className='logo'></img>
            </div>
            <div className='nav'>
                
            </div>
        </div>
    )
}

export default Header