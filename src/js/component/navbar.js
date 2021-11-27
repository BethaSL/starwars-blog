import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-dark bg-dark">
			<Link to="/" className="navbar-brand navbar-logo">
				<img src={Logo} />
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					{`Favorites ${store.favorites.length}`}
				</button>
				<ul className="dropdown-menu px-2 dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map(favorite => {
						return (
							<li
								key={favorite.name}
								onClick={() => {
									actions.deleteFavorites(favorite.name);
								}}>
								{favorite.name}
								<i className="fas fa-trash trash__icon"> </i>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
