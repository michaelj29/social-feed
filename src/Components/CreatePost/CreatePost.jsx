import React, { useState, useEffect } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Name</label>
                    <input type ='name' onChange={(event) => setName(event.target.value)} value={name}></input>
                </div>
                <div>
                    <label>Thoughts</label>
                    <input type ='thoughts' onChange={(event) => setThought(event.target.value)} value={thought}></input>
                </div>
                <button type='submit'>Post Thought</button>
            </div>
        </form>
     );
}
 
export default CreatePost;