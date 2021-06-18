import React, {useState, useEffect} from "react";

import TutorialDataService from "../services/tutorial.service";
//import {Link} from 'react-router-dom';


const TutorialsList = () => {
    const [tutorials, setTutorials] =  useState([]);
    //const [currentTutorial, setCurrentTutorial]


    useEffect(()=>{
        retrieveTutorials();
    }, []);


    const retrieveTutorials = () =>{
        TutorialDataService.getAll()
            .then(response => {
                setTutorials(response.data);
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="col-md-6">
            <h4>Tutorials List</h4>
            <ul className="list-group">
                {tutorials &&
                    tutorials.map((tutorial, index) =>(
                        <li key={index}>{tutorial.name}</li>
                    ))}
            </ul>
        </div>
    )
};

export default TutorialsList;

