import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const Details = () => {

    const { store, actions } = useContext(Context);

    const params = useParams()

    useEffect(() => {
        actions.getOne(params.uid)
    }, [])

    /*
    
    
    :
    "41.9BBY"
    created
    :
    "2024-11-17T12:12:02.658Z"
    edited
    :
    "2024-11-17T12:12:02.658Z"
    eye_color
    :
    "yellow"
    gender
    :
    "male"
    hair_color
    :
    "none"
    height
    :
    "202"
    homeworld
    :
    "https://www.swapi.tech/api/planets/1"
    mass
    :
    "136"
    name
    :
    "Darth Vader"
    skin_color
    :
    "white"
    url
    :
    
    */


    return (
        <div className="container">
            <div className="card">
                <div className="d-flex">
                    <figure>
                        <img src="" alt="" />
                        <figcaption>                    
                            {store.character?.properties?.name}
                        </figcaption>
                    </figure>
                </div>
                <div>

                    <p>
                        {store.character?.properties?.mass}
                    </p>
                    <p>
                        {store.character?.properties?.hair_color}

                    </p>
                    <p>
                        {store.character?.properties?.skin_color}

                    </p>
                    <p>
                        {store.character?.properties?.eye_color}

                    </p>
                    <p>
                        {store.character?.properties?.height}

                    </p>
                </div>
            </div>
        </div>
    )
}