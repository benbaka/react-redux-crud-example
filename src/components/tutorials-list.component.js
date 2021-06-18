import React, {Component} from 'react';
import {connect} from "react-redux";
import {retrieveTutorials} from "../actions/tutorials";

class TutorialsList extends Component{
    constructor(props){
        super(props);


        this.state = {

        }
    }

    componentDidMount(){
        this.props.retrieveTutorials();
    }
    render(){

        const {tutorials } = this.props;
        // console.log(tutorials);
        // tutorials.map((i, k) =>(console.log("ben")));



        return(
            <div>
            <h1>Showing all tutorials</h1>
            {tutorials.map((tutorial, index) =>(
                <li key={index}>{tutorial.name}</li>
            ))}
            </div>
        )
    }
}

const mapStateProps  = (state) =>{
    return {
        tutorials: state.tutorials,
    }
};

export default connect(mapStateProps, {retrieveTutorials})(TutorialsList);

// export default TutorialsList;