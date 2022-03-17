import 'bootstrap/dist/css/bootstrap.css';

function Default() {
    return (
        <div>
            <p>Hello</p>
        </div>
    )
}

function Tahiana() {
    return (
        <div>
            <p>Tahiana</p>
        </div>
    )
}

function Tsanta() {
    return (
        <div>
            <p>Tsanta</p>
        </div>
    )
}

function Cedric() {
    return (
        <div>
            <p>Cedric</p>
        </div>
    )
}

function Content({auteur, updateAuteur}) {
    if (auteur == 'Tahiana') {
        return (<Tahiana/>)
    } else if (auteur == 'Tsanta') {
        return (<Tsanta/>)
    } else if (auteur == 'Cedric') {
        return (<Cedric/>)
    } else {
        return (<Default/>)
    }
}

export default Content