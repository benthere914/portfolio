import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<BrowserRouter>
            <Header/>
			<Switch>
                <Route path='/'>

                </Route>
                <Route path='/about'>

                </Route>
                <Route path='/Contact'>

                </Route>
                <Route path='/Projects'>

                </Route>
			</Switch>
            <Footer/>
		</BrowserRouter>
	);
}

export default App;
