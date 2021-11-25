import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/Card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		//Characters
		<div className="container">
			<div className="row">
				<h1>
					<strong>Characters</strong>
				</h1>
				<div className="borders">
					{store.people.map(item => {
						return <Card key={item.udi} item={item} endpoint="people" />;
					})}
				</div>
			</div>
			<div className="row">
				<h1>
					<strong>Planets</strong>
				</h1>
				<div className="borders">
					{store.planets.map(item => {
						return <Card key={item.uid} item={item} endpoint="planets" />;
					})}
				</div>
			</div>
			<div className="row">
				<h1>
					<strong>Vehicles</strong>
				</h1>
				<div className="borders">
					{store.vehicles.map(item => {
						return <Card key={item.uid} item={item} endpoint="vehicles" />;
					})}
				</div>
			</div>
		</div>
	);
};
