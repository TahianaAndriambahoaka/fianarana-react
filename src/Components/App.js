import Header from './Header'
import Content from './Content'
import { useState } from 'react'

function App() {
    const [auteur, updateAuteur] = useState(null)
    return (
        <div>
            <Header auteur={auteur} updateAuteur={updateAuteur}/><Content auteur={auteur} updateAuteur={updateAuteur}/>
        </div>
    )
}

export default App