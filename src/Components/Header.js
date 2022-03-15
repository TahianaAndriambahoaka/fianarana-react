import '../styles/Header.css';
import '../styles/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    const tahiana = <button class='btn btn-outline-light animate__animated animate__bounceInLeft'>Tahiana😎</button>
    const tsanta = <button class='btn btn-outline-secondary animate__animated animate__fadeInDown'>Tsanta😱</button>
    const cedric = <button class='btn btn-outline-danger animate__animated animate__bounceInRight'>Cedric🤪</button>
    const ligne_haut = <hr class='animate__animated animate__rotateOut'/>
    return (
        <div>
            <div className='header'>{ligne_haut}{tahiana}&nbsp;&nbsp;&nbsp;{tsanta}&nbsp;&nbsp;&nbsp;{cedric}{ligne_haut}</div>
        </div>
    )
}

export default Header