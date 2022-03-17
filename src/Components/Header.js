import '../styles/Header.css';
import '../styles/animate.min.css';
import ImageHome from '../images/home.png';
import ImageCommunit from '../images/COMMUN-IT.png';
import 'bootstrap/dist/css/bootstrap.css';

function handleClick(args) {
    if (args == 'Tahiana') {
        console.log('✨ Ceci est un clic ✨'+args)
    } else if (args == 'Tsanta') {
        console.log('✨ Ceci est un clic ✨'+args)
    } else if (args == 'Cedric') {
        console.log('✨ Ceci est un clic ✨'+args)
    }
}

function Header({auteur, updateAuteur}) {
    const tahiana = <button className='btn btn-outline-light animate__animated animate__bounceInLeft' onClick={() => updateAuteur('Tahiana')}>Tahiana😎</button>
    const tsanta = <button className='btn btn-outline-secondary animate__animated animate__fadeInDown' onClick={() => updateAuteur('Tsanta')}>Tsanta😱</button>
    const cedric = <button className='btn btn-outline-danger animate__animated animate__bounceInRight' onClick={() => updateAuteur('Cedric')}>Cedric🤪</button>
    const home = <img src={ImageHome} alt="Home" height="50px" className='animate__animated animate__flash' onClick={() => updateAuteur(null)}/>
    const comunit = <img src={ImageCommunit} alt="Home" height="50px" className='animate__animated animate__flash' onClick={() => updateAuteur(null)}/>
    const ligne = <hr className='animate__animated animate__rotateOut'/>
    return (
        <div>
            <div className='header'>
                {ligne}{home}&nbsp;&nbsp;&nbsp;{tahiana}&nbsp;&nbsp;&nbsp;{tsanta}&nbsp;&nbsp;&nbsp;{cedric}&nbsp;&nbsp;&nbsp;{comunit}{ligne}
            </div>
        </div>
    )
}

export {Header, handleClick}