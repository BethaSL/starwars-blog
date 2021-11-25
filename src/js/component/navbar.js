import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand navbar-logo" href="#">
				<img src={Logo} />
			</a>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					{`Favorites ${store.favorites.length}`}
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map(favorite => {
						return <li key={favorite.name}>{favorite.name}</li>;
					})}
				</ul>
			</div>
		</nav>
	);
};
