import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import Project from './components/project'
import Technologies from './components/technologies';
import Technology from './components/technologies/technology'
require('dotenv').config();
function App() {
	return (
		<BrowserRouter>
            <Header/>
			<Switch>
                <Route path='/' exact={true}>
                    <Home/>
                    <Footer/>
                </Route>
                <Route path='/Contact'>
                    <Contact/>
                    <Footer/>
                </Route>
                <Route path='/Projects' exact={true}>
                    <Projects/>
                    <Footer/>
                </Route>
                <Route path='/Projects/:projectName'>
                    <Project/>
                    <Footer/>
                </Route>
                <Route path='/Technologies' exact={true}>
                    <Technologies/>
                    <Footer/>
                </Route>
                <Route path='/Technologies/:technology'>
                    <Technology/>
                </Route>
			</Switch>

		</BrowserRouter>
	);
}

export default App;
