import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import Project from './components/project'
require('dotenv').config();
function App() {
	return (
		<BrowserRouter>
            <Header/>
			<Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path='/Contact'>
                    <Contact/>
                </Route>
                <Route path='/Projects' exact={true}>
                    <Projects/>
                </Route>
                <Route path='/Projects/:projectName'>
                    <Project/>
                </Route>
			</Switch>
            <Footer/>
		</BrowserRouter>
	);
}

export default App;
