import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		// background light color: #f8f9fa

		this.state = {
			isOpen: false
		}
	}

	toggle() {
		this.setState(prevState => {
			return {
				...prevState,
				isOpen: !prevState.isOpen
			}
		})
	}

	render() {
		return (
			<header>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand tag={Link} to="/">Secure React App</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink tag={Link} to="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/profile">Profile</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}

export default Header;
