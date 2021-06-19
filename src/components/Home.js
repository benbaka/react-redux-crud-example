import {Context} from "../store";
import React, {useContext, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";


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
            <div class="container">
                <div class="roll">
                    <div className="col-md-1"></div>
                    <div className="col-md-9">
                        <h1>Home</h1>

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {state.posts.map((post) =>(
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.description}</td>
                                    <td>{post.title}</td>
                                    <td><Link to={`/showPost/${post.id}`} replace>Show</Link></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Home;