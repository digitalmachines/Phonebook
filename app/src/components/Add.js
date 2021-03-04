import React, { useState } from 'react'; 

import List from './List'; 

import { nanoid } from 'nanoid'; 
import './components.css'; 

function Add(){
        const [list, setList] = useState([])    
    
        const [input, setInput] = useState({ 
            id: '', name: '', number: '', address: '', city: '',  state: '' })

        function onHandleChange(e){
            setInput({...input, [e.target.name]: e.target.value})
            console.log(input)
        }

        function onHandleSubmit(){
            const newContact = { ...input, id: nanoid()}
            setList([...list, newContact])
            console.log("New Contact Added!: ", newContact)
        }
    
        function editId(id){
            const newlist = list.filter((item)=>item.id !== id)
            setList(newlist)
        }
        
        function removeId(id){
            const newlist = list.filter((item)=>item.id !== id)
            setList(newlist)
        }

    return(
            <div className='container'>
                <div className='add'>
                    <h1>Add:</h1>
                    <label>Name: </label>
                    <input name="name" value={input.name} onChange={onHandleChange} /><br/>
                    
                    <label>Number: </label>
                    <input name="number" value={input.number} onChange={onHandleChange} /><br/>

                    <label>Address: </label>
                    <input name="address" value={input.address} onChange={onHandleChange} /><br/>

                    <label>City: </label>
                    <input name="city" value={input.city} onChange={onHandleChange}/><br/>

                    <label>State: </label>
                    <input name="state" value={input.state} onChange={onHandleChange} /><br/>
                    
                    <button onClick={()=>onHandleSubmit(input)}>Add To List</button>
                </div>                    
            <List list={list} edit={editId} remove={removeId}/>
            </div>
        );
}

export default Add;