import {Context} from "../store";
import React, {useContext, useEffect} from 'react';


const Home = () =>{

    const [state, dispatch] = useContext(Context);

    //
    useEffect(()=>{

     }, []);

    const addPost = () => {
        var num = Math.floor(Math.random()*1000);

        dispatch(
            {type:"ADD_POST",
                payload: {"title":'GH', "id": num, "description":'u'}
            }
        )

    }

    const allPost = () => {

        console.log(state.posts.length);
    }


    return(
        <>
        <h1>Home</h1>

            <div className="form-group">
                <button
                    onClick={addPost}
                 type="submit" className="btn btn-primary btn-block"> Add</button>

        <button
            onClick={allPost}
            type="submit" className="btn btn-primary btn-block"> Length</button>
        </div>

    <table>
        <tbody>

    {state.posts.map((post) =>(
        <tr key={post.id}>
            <td>{post.description}</td>
            <td>{post.title}</td>

        </tr>
    ))}
        </tbody>
    </table>


        </>
    )
}

export default Home;