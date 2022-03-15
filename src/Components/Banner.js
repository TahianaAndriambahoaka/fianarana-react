import '../styles/Banner.css';
import logo from '../images/logo512.png';

function Banner() {
    const title = 'Ity zany le hoe fianarana-react 😎😱'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner