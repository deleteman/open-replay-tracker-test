import React from 'react';
import Container from 'react-bootstrap/Container'
import FailingLink from './components/failingLink';
import Form from './components/form';
import SecondPage from './components/secondPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import OpenReplay from '@openreplay/tracker';
import trackerAssist from '@openreplay/tracker-assist';
import { 
  BrowserRouter as Router ,
  Route, Routes, Outlet} from 'react-router-dom';

//...
const tracker = new OpenReplay({
  projectKey: "aQJ5u6DbFl4RhOJpBwzD"
});
tracker.use(trackerAssist({})); // check the list of available options below
tracker.setUserID("fernando.dolio@gmail.com");
tracker.start();


function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default function App() {
  //console.log(formState.errors)
  return (
    <Container>
    <Router>

      <nav className='menu'>
        <FailingLink url="/">Home page</FailingLink>
        <FailingLink url="/second-page">Second page</FailingLink>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="second-page" element={<SecondPage/>} />
        </Route>
      </Routes>

      
  </Router>
  </Container>
  );
}