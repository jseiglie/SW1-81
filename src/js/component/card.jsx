import React from "react";
import { Link } from "react-router-dom";


export const Card = (props) => {


    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
                <div className="d-flex justify-content-around">
                    <Link to={'/details/' + props.uid}>
                        <button className="btn btn-primary">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-secondary"> corazon aqui</button>
                </div>
            </div>
        </div>
    )
}