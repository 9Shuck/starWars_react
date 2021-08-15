import React from "react";
import "../../styles/footer.scss";
import IconBar from "./iconBar.jsx";

const Footer = () => {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column1 */}
					<div className="col">
						<img
							className="logo"
							src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
							alt=""
						/>
					</div>
					{/* Column2 */}

					{/* Column3 */}

					<IconBar />
				</div>
				<hr />

				<div className="row">
					<p className="col-sm">
						&copy;
						{new Date().getFullYear()} STAR WARS | All rights reserved | Terms Of Service | Privacy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
