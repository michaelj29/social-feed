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

        props.addNewThought(newPost)

    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Name</label>
                    <input type ='name' value='name'></input>
                </div>
                <div>
                    <label>Thoughts</label>
                    <input type ='thoughts'  value='thoughts'></input>
                </div>
                <button type='submit'>Post Thought</button>
            </div>
        </form>
     );
}
 
export default CreatePost;