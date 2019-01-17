import axios from "axios";
const KEY = "AIzaSyAfB5H5g7zrQz8RIdCvGJDvVNu6h6t72Ks";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
