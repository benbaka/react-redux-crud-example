import {Context} from "../store";
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { Fade,FadeTransform } from 'react-animation-components'

import { useSpring, animated } from 'react-spring'



const SuccessMessage = () => {
    return (
        <div className="alert alert-success" role="alert">
            Post has been added successfully ! <Link to={"/home"} >List Posts</Link>

        </div>
    )
}


const ErrorMessage = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            An error occured. Refer to fields.

        </div>    )
}




const InputField =(props) => {


    return(
        <>
            <div className="form-group">
                <label htmlFor={props.htmlFor}>{props.label}</label>
                <input type={props.type} className={`form-control ${props.errorClass}`}
                       id={props.htmlFor} required
                       value={props.value}
                       name={props.name} onChange={(event)=>props.onChange(event)}
                       />
                    <div className="invalid-feedback">
                        {props.errorMessage}
                    </div>

            </div>

        </>

    )
}

const Jumbotron = () => {

    return (
    <>
        <p></p>
    <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit,
            .</p>
        <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#sadf" role="button">Learn more</a>
            </p>
    </div>


        </>
        )
}

const Counter = () => {
    const [count, setCount] = React.useState(0);

    useEffect(()=>{
        const parsedCount = Number(localStorage.getItem("count") || 0);
        setCount(parsedCount)
    }, [])

    useEffect(()=>{
        localStorage.setItem("count", count)
    }, [count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=> setCount(c=> c+1)}>+</button>
            <button onClick={()=> setCount(c=> c-1)}>-</button>
        </div>
    )
}


const NewPost = () => {

    const [state, dispatch] = useContext(Context);

    // form data
    const new_post = {
        id: null,
        title: '',
        description: '',
        published: false
    }

    const formErrorDict = {
        title: '',
        titleHasError: '',
        description: '',
        descriptionHasError: '',
    }




    const [post, setPost] = useState(new_post);
    const [submitted, setSubmitted] = useState(false);
    const [saved, setSaved] = useState(false);
    const [formErrors, setFormErrors] = useState(formErrorDict);

    const handleInputChange = (event) => {
        console.log(post)
        const {name, value} = event.target;
        setPost({...post, [name]:value});

        if(post.title.includes('foo')) {
            setFormErrors({...formErrors, ['title']: "The words foo, bar, baz are not allowed", ['titleHasError']: "is-invalid"});
        }
        else if(post.description.length < 3){
            console.log("GOT HERE >>>>>>>>>>>>>>>>>>>")
            setFormErrors({...formErrors, ['description']: "Please provide a longer description", ['descriptionHasError']: "is-invalid"});
        }else {

            setFormErrors({...formErrors, ['titleHasError']: "is-valid" ,['descriptionHasError']: "is-valid"});
        }

        console.log(post.title);
        console.log(post.description<3);
    };

    const savePost = () => {
        var data = {
            title: post.title,
            description: post.title,
            id: Math.floor(Math.random()*1000)

    }
        setSubmitted({...submitted},true);
        let errorFound = false;

        // set name field to invalid
        if(post.title.includes('foo')) {
            errorFound = true;
            setSaved(false);
            setFormErrors({...formErrors, ['title']: "The words foo, bar, baz are not allowed", ['titleHasError']: "is-invalid"});
        } else if(post.title.length ===0){
            errorFound = true;
            setSaved(false);
            setFormErrors({...formErrors, ['title']: "Title field can't be empty", ['titleHasError']: "is-invalid"});
        }
        else if(post.description.length < 3){
            errorFound = true;
            setSaved(false);
            setFormErrors({...formErrors, ['description']: "Please provide a longer description", ['descriptionHasError']: "is-invalid"});
        }
        else {

            setFormErrors({...formErrors, ['titleHasError']: "is-valid", ['descriptionHasError']: 'is-valid'});
        }




        if(!errorFound){
            setSaved(true);
            console.log(data);
            dispatch({type: "ADD_POST", payload: data});

            resetForm();
        }





    };


    const resetForm = () => {
        setPost({...post, ['title']:'', ['id']: ''
                        , ['description']:'', ['published']:''})
        setFormErrors({...formErrors, ['titleHasError']: null, ['descriptionHasError']: null, });

    }


    const addPost = () => {
        var num = Math.floor(Math.random()*1000);

        dispatch(
            {type:"ADD_POST",
                payload: {"title":'GH', "id": num, "description":'u'}
            }
        )

    };


    return(

        <FadeTransform  in
                        transformProps={{
                            exitTransform: 'translateX(-100px)'
                        }}
                        fadeProps={{
                            enterOpacity: 0.85,
                        }}
        >

        <div>



            <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">

                <Counter/>
                <Jumbotron/>

                {submitted && saved ? <SuccessMessage/> : null}
                {submitted && !saved ? <ErrorMessage/>: null }

                <h1 className="display-6">Create new Post!</h1>
                <hr/>
                <InputField htmlFor="title" errorClass={formErrors.titleHasError} label="Title"
                            errorMessage={formErrors.title}
                type="text" id="title" value={post.title}
                name="title" onChange={handleInputChange}/>

                <InputField htmlFor="description" errorClass={formErrors.descriptionHasError}
                            label="Description" type="text" id="title"
                            value={post.description}
                            errorMessage={formErrors.description}
                            name="description" onChange={handleInputChange} />

                <button onClick={savePost} className="btn btn-success">
                    Submit
                </button>
                </div>

            <div className="col-1">

            </div>
        </div>
        </div>
        </FadeTransform>

    )
}

export default NewPost;