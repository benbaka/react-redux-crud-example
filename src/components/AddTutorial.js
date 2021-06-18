import React, {useState} from "react";

import TutorialDataService from "../services/tutorial.service";
//import {Link} from 'react-router-dom';


const AddTutorial = () => {

    const initialTutorialStore = {
        id: null,
        name: "",

    };

    const [tutorial, setTutorial] = useState(initialTutorialStore);
    const [submitted, setSubmitted] = useState(false);

    const handlInputChange = event => {
        const {name, value} = event.target;
        setTutorial({...tutorial, [name]: value})
    };

    const saveTutorial = () => {
        var data = {
            name: tutorial.name,
        };

        TutorialDataService.create(data.name)
            .then(response => {
                setTutorial({
                    name: response.data.name
                })
                setSubmitted(true);
                console.log(response.data);

            })
            .catch(e => {
                console.log(e)
            });
    };

        // const newTutorial = () => {
        //     setTutorial(initialTutorialStore);
        //     setSubmitted(false);
        // };

        return (
            <div className="submit-form">
                {submitted? (
                    <div>
                        <h4 className="text-success">You submitted successfully </h4>

            </div>):(
                <div>
                    <div className="form-group">
                        <label htmlFor="name" ></label>
                        <input
                            id="name"
                            required
                            value={tutorial.name}
                            onChange={handlInputChange}
                            name="name"
                            type="text" className="form-control"/>
                    </div>

                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
                )}
            </div>

        );


    };


    export default AddTutorial;

