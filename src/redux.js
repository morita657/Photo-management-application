// define initial state
const getPhotos = () => {
    const storage = localStorage.getItem("insta-hack");
    if (storage !== null) {
        return JSON.parse(storage);
    }
    else {
        localStorage.setItem("insta-hack", JSON.stringify([]));
        return localStorage.getItem("insta-hack");
    }
}
const initialState = {
    photos: getPhotos() || [],
    selectedPhoto: "",
    id: 0,
    view: "ShowAllPhoto",
    isLoaded: false,
    username: "",
    url: ""
}

// design reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ShowAllPhoto": {
            const newState = {
                ...state,
                isLoaded: true,
                view: "ShowAllPhoto",

            };
            return newState;
        }
        case "ShowSinglePhoto": {
            console.log('actions', action);
            const newState = {
                ...state,
                id: action.id,
                view: "ShowSinglePhoto",
            };
            return newState;
        }
        case "DeletePhoto": {
            const storage = localStorage.getItem("insta-hack");
            const raw = JSON.parse(storage);
            raw.splice(action.id, 1);
            localStorage.setItem("insta-hack", JSON.stringify(raw));
            const newPhotos = JSON.parse(localStorage.getItem("insta-hack"));
            const newState = ({
                ...state,
                photos: newPhotos,
                view: "ShowAllPhoto",
            });
            return newState;
        }
        case "UploadPhoto": {
            const storage = localStorage.getItem("insta-hack");
            const photoInfo = { "username": action.username, "photoPath": action.url, "timestamp": new Date() };
            if (storage === null) {
                localStorage.setItem("insta-hack", JSON.stringify([photoInfo]));
            }
            else {
                const updatedData = JSON.parse(storage);
                updatedData.push(photoInfo);
                localStorage.setItem("insta-hack", JSON.stringify(updatedData));
            }
            const newPhotos = JSON.parse(localStorage.getItem("insta-hack"));
            const newState = ({
                ...state,
                photos: newPhotos,
                view: "UploadPhoto",
            });
            return newState;
        }
        default: {
            return state;
        }
    }
}

export { reducer, initialState, SHOW_ALL_PHOTOS };