
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
                            <tr key={index + 1}>
                                <strong>{post.name}</strong>
                                <p>{post.thought}</p>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayPost;