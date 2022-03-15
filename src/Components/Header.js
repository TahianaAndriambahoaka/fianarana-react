import '../styles/Header.css';
import '../styles/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    const tahiana = <button class='btn btn-outline-primary animate__animated animate__bounceInLeft'>Tahiana😎</button>
    const tsanta = <button class='btn btn-outline-secondary animate__animated animate__fadeInDown'>Tsanta😱</button>
    const cedric = <button class='btn btn-outline-success animate__animated animate__bounceInRight'>Cedric🤪</button>
    const ligne_bas = <hr className='ligne-bas' class='animate__animated animate__rotateIn'/>
    return (
        <div>
            <div className='header'>{tahiana}&nbsp;{tsanta}&nbsp;{cedric}</div>
            {ligne_bas}
        </div>
    )
}

export default Header