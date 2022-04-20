import React, { useState, useEffect } from 'react';

const Post = (props) => {



    return ( 
        <div>
            <div>
                <strong>Mikey Mike </strong>
            </div>
            <div>
                <p>Here is our first status that behaves like Tom from Myspace. I guess Im stuck here XD</p>
            </div>
            <div>
            </div>
                <button type='like' className="bi bi-cloud-lightning-fill" style={{color : 'light-blue'}}>Like</button>
                <button type='dislike' className="bi bi-cloud-lightning-fill" style={{cololr: 'red'}}>Dislike</button>
        </div>
     );
}
 
export default Post;