import React, { Component } from 'react';

import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Home from '../Home';
import { Container } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<div className='header-bg'>
					<Container>
						<Header />
					</Container>
				</div>
				<Container>
					<Home />
				</Container>
				<div style={{ bottom: ' 0', position: 'absolute', width: '100%' }}>
					<Container>
						<Footer />
					</Container>
				</div>
			</div>
		);
	}
}
export default App;
