import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = item => {
	const { store, actions } = useContext(Context);
	const { uid, type } = useParams();
	const [detail, setDetail] = useState({});
	useEffect(() => {
		if (uid) {
			for (let arr in store) {
				if (arr == type) {
					let newItem = store[type].find(item => {
						return item.uid == uid;
					});
					setDetail(newItem);
				}
			}
		}
	}, []);
	return (
		<div className="container char-row">
			<div className="row mt-5 character__card">
				<div className="col">
					<img src="https://via.placeholder.com/800x600" className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h3 className="card-title">
							<strong>{detail.name}</strong>
						</h3>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<Link to={`/`} type="button" className="btn btn-warning homebutton">
							Go back home!
						</Link>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col character__info">
					<h1> Red info</h1>
				</div>
			</div>
		</div>
	);
};
