import axios from "axios";

export default  axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        "key": "412804fed10f44ffa2d45089bb74a638",
    },
});