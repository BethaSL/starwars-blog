import React from "react";
import PropTypes from "prop-types";

export const Card = ({ item }) => {
	return (
		<div className="card">
			<img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					{`Some quick example text to build on the card title and make up the bulk of the card's
                    content.`}
				</p>
				<div className="card__footer">
					<a href="#" className="btn btn-primary card__button">
						Learn more
					</a>
					<a href="#" className="btn btn-warning card__heart">
						<i className="fa fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object
};
