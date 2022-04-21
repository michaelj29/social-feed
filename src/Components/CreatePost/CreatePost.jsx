import React, { useState, useEffect } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {
    
    const [name, setName] = useState('')
    const [thought, setThought] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name : name,
            thought: thought
        };

        props.setNewThought(newPost)
        console.log(newPost)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <div className='form-group'>
                    <label>Name</label>
                    <input type ='name' className="form-control" onChange={(event) => setName(event.target.value)} value={name}></input>
                </div>
                <div className='form-group'>
                    <label>Thoughts</label>
                    <input type ='thoughts' className="form-control" onChange={(event) => setThought(event.target.value)} value={thought}></input>
                </div>
                <button type='submit' style={{'margin-top': '1em'}}>Post Thought</button>
            </div>
        </form>
     );
}
 
export default CreatePost;