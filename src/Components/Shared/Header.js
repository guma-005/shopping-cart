import React, { Component } from '../../../node_modules/react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<Navbar expand='lg'>
				<Navbar.Brand href='#home'>Home</Navbar.Brand>
				<Navbar>
					<Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Navbar>
			</Navbar>
		);
	}
}
