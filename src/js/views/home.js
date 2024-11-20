import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div className="text-center mt-5">

			<section>
				<h2>People</h2>
				<div className="row">
					{
						store.people?.map(el => <Card key={el.uid} type={'people'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`} />)
					}
				</div>
			</section>
			<section>
				<h2>Planets</h2>
				<div className="row">
					{
						store.planets?.map(el => <Card key={el.uid} type={'planets'} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`} />)
					}
				</div>
			</section>

		</div>
	);
}