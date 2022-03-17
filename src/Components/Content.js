import 'bootstrap/dist/css/bootstrap.css';
import '../styles/animate.min.css';
import ImageTahiana from '../images/Tahiana.png';
import ImageTsanta from '../images/Tsanta.png';
import ImageCedric from '../images/Cedric.png';
import Tahiana from './Tahiana';
import Tsanta from './Tsanta';
import Cedric from './Cedric';

function Cards({auteur, updateAuteur}) {
    return (
        <div className='row' style={{textAlign:"center"}}>
            <div className='col-4 animate__animated animate__slideInLeft'>
                <div className="card" style={{width: "75%", marginLeft:"12%"}}>
                    <img className="card-img-top" src={ImageTahiana} alt="Image" height="350px"/>
                    <div className="card-body">
                        <h5 className="card-title">ANDRIAMBAHOAKA <br/> Tahiana</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary' onClick={() => updateAuteur('Tahiana')}>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className='col-4 animate__animated animate__slideInUp'>
                <div className="card" style={{width: "75%", marginLeft:"12%"}}>
                    <img className="card-img-top" src={ImageTsanta} alt="Image" height="350px"/>
                    <div className="card-body">
                        <h5 className="card-title">RAKOTONJANAHARY <br/> Tsantaniaina</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary' onClick={() => updateAuteur('Tsanta')}>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className='col-4 animate__animated animate__slideInRight'>
                <div className="card" style={{width: "75%", marginLeft:"12%"}}>
                    <img className="card-img-top" src={ImageCedric} alt="Image" height="350px"/>
                    <div className="card-body">
                        <h5 className="card-title">RABARIJOHN <br/> Cedric</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary' onClick={() => updateAuteur('Cedric')}>En savoir plus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Default({auteur, updateAuteur}) {
    return (
        <div className='container'>
            <br/>
            <div className='row'>
                <h1 style={{textAlign:"center"}}>Bienvenue dans notre site web 😉</h1>
            </div>
            <br/>
            <Cards auteur={auteur} updateAuteur={updateAuteur}/>
        </div>
    )
}

function PageTahiana() {
    return (
        <Tahiana/>
    )
}

function PageTsanta() {
    return (
        <Tsanta/>
    )
}

function PageCedric() {
    return (
        <Cedric/>
    )
}

function Content({auteur, updateAuteur}) {
    if (auteur == 'Tahiana') {
        return (<PageTahiana/>)
    } else if (auteur == 'Tsanta') {
        return (<PageTsanta/>)
    } else if (auteur == 'Cedric') {
        return (<PageCedric/>)
    } else {
        return (<Default auteur={auteur} updateAuteur={updateAuteur}/>)
    }
}

export default Content