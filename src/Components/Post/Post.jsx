import React, { useState, useEffect } from 'react';

const Post = (props) => {



    return ( 
        <div>
            <div>
            {props.setNewThought.map((post) => {
                        return (
                            <div>
                                <u>{post.name}</u>
                                <u>{post.thought}</u>
                            </div>
                        )
                    })}
            </div>
            <div>
                <p>Post</p>
            </div>
            <div>
            </div>
                <button type='like' className="bi bi-cloud-lightning-fill" style={{color : 'light-blue'}}>Like</button>
                <button type='dislike' className="bi bi-cloud-lightning-fill" style={{cololr: 'red'}}>Dislike</button>
        </div>
     );
}
 
export default Post;