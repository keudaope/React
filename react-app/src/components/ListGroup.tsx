import { useState } from "react";

function ListGroup()
{
    let items = [
        'Helsinki',
        'Tampere',
        'Jyväskylä',
        'Oulu',
        'Rovaniemi'
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return(
    <>
        <h1>Lista</h1>
        {items.length === 0 && <p>Kaupunkeja ei löytynyt</p>}
        <ul className="list-group">
            {items.map((item, index) => (
            <li 
            className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key = {item} 
            onClick = {() =>{setSelectedIndex(index);}}
            >
            {item}
            </li>
            ))}
       </ul>
    </>);
}

export default ListGroup;