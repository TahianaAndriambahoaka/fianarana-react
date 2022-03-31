import $ from 'jquery'; 
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function CallWebService({url, list, updateList}) {
    React.useEffect(() => {
        axios
            .get(url)
            .then(function (response) {
                updateList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    return (
        <p>Hello</p>
    )
}

function Tahiana() {
    const [list, updateList] = useState(null)
    return (
        <div>
            <p>Coucou</p>
        </div>
    )
}

export default Tahiana