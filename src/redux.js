// define initial state
const initialState = {
    photos: ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"],
    selectedPhoto: "",
    id: 0,
    view: "ShowAllPhoto"
}
// define actions
// show all photo >>> photos takes photos from local storage
// show single photo >>> selectedPhoto takes single photo and id will be assigned

// design reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return;
        default:
            return state;
    }
}

export { reducer, initialState };