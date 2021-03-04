import React from 'react'; 
import './components.css'; 

function List(props){
    return(
        <div className='list'>
            <h1>List</h1>
                { props.list.map((item) => (
                    <div className='item' key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.id}</h2>
                        <h2>{item.number}</h2>
                        <h3>{item.address}</h3>
                        <h3>{item.city}</h3>
                        <h3>{item.state}</h3>
                        <button onClick={() => props.edit(item.id)}>Edit</button>
                        <button onClick={() => props.remove(item.id)}>Remove from List</button>
                    </div>
                ))}
        </div>
    )
}

export default List; 