import {
    RETRIEVE_TUTORIALS
} from "./types";


import TutorialDataService from "../services/tutorial.service";

export const retrieveTutorials = () => async(dispatch) => {
    try{
        const res = await TutorialDataService.getAll();
        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    }catch(err){
        console.log(err);
    }
};


