import http from "../http-common";


class TutorialDataService{
    getAll(){
        return http.get("/items")
    }

    create(name){
        return http.get("/create_item_endpoint/"+name)
    }
}

export default new TutorialDataService();
