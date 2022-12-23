import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";

function Crud() {
    //All Movie Url
    const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

    //All Category Url
    const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // console.log(movies);

    //Searched Movie Url

    async function getAllMovies() {
        await axios.get(baseUrlMovie).then((response) => {
            setItems(response.data)
        });

    }
    useEffect(() => {
        getAllMovies();

    }, []);



    return <div className="app">
        {items.map((item, i) => {
            return (<div key={i}>{item.name}</div>)
        })}
    </div>;
}

export default Crud;
