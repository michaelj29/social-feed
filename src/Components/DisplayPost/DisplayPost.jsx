import React, { useState } from 'react';
import './DisplayPost.css'

const DisplayPost = (props) => {

    const [likeButton, setLikeButton] = useState('inactive')
    const [dislikeButton, setDislikeButton] = useState('inactive-d')

    function handleLikeClick(){
        if(likeButton === 'inactive'){
            setLikeButton('active')
        } else if(likeButton === 'active'){
            setLikeButton('inactive')
            setDislikeButton('inactive-d')
        } 
    }
    function handleDislikeClick(){
        if(dislikeButton === 'inactive-d'){
            setDislikeButton('active-d')
        } else if(dislikeButton === 'active-d'){
            setDislikeButton('inactive-d')
        } 
    }
    
    return ( 
        <div className='table'>
            <table >
                <thead>
                    <tr>
                        <th>Everyones Post</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userPost.map((post, index) => {
                        return (
                            <tr key={index + 1}>
                                <strong>{post.name}</strong>
                                <p>{post.thought}</p>
                                <div>
                                <button className={likeButton} onClick={handleLikeClick} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning-fill" viewBox="0 0 16 16">
                                    <path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
                                </svg>Like
                                </button>
                                <button className={dislikeButton} onClick={handleDislikeClick} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning-fill" viewBox="0 0 16 16">
                                    <path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
                                </svg>Dislike
                                </button>
                                
                                </div>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayPost;