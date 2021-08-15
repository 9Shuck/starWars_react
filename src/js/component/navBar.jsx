import React, { Fragment } from "react";
import IconBar from "./iconBar.jsx";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../../styles/navBar.scss";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavBar = () => {
	return (
		<Fragment>
			<Navbar className="navBarStyle" expand="lg">
				<IconBar />
				<Image
					className="imageLogo"
					src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
					fluid
				/>

				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Favourites" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Planets</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Vehicles</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Species</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">All items</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="searchButton d-flex">
							<FormControl
								type="search"
								placeholder="Search Star Wars"
								className="searchBar mr-2"
								aria-label="Search"
							/>
							<Button className="btn-warning">Search</Button>{" "}
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Nav className=" bottomNavs justify-content-center" activeKey="/">
				<Nav.Item>
					<Nav.Link eventKey="link-1" href="/home" to="/home">
						Home
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2" href="species" to="/species">
						Species
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3" href="vehicles" to="/vehicles">
						Vehicles
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3" href="planets" to="/planets">
						Planets
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Fragment>
	);
};

export default NavBar;
