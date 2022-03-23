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

const users = ["fernando.doglio@gmail.com", "adam.sandler@fakeeamil.com", "thisisatest@gmail.com", "tomholland@imspiderman.com"]


//...
const tracker = new OpenReplay({
  projectKey: "aQJ5u6DbFl4RhOJpBwzD"
});
tracker.use(trackerAssist({})); // check the list of available options below
let userId  = users[Math.ceil(Math.random() * 3)]
tracker.setUserID(userId);
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