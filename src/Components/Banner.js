import '../styles/Header.css';
import '../styles/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    const tahiana = <button class='btn btn-outline-primary animate__animated animate__bounceInLeft'>Tahiana😎</button>
    const tsanta = <button class='btn btn-outline-secondary animate__animated animate__fadeInDown'>Tsanta😱</button>
    const cedric = <button class='btn btn-outline-success animate__animated animate__bounceInRight'>Cedric🤪</button>
    return (
        <div className='header'>{tahiana}&nbsp;{tsanta}&nbsp;{cedric}</div>
    )
}

export default Header