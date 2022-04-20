import React, { useState, useEffect } from 'react';

const DisplayPost = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Everyones Post</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userPost.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td>Some Post</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayPost;