import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductForm from "./component/ProductForm";
import ProForm from "./screens/proForm";
import talkToExport from "./screens/talkToExport";



function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
          <Route path='/login' exact component={LoginScreen } />
            <Route path='/' exact component={HomeScreen } />
            <Route path='/product/:id' exact component={ProductScreen } />
            <Route path='/addproduct' exact component={ProductForm } />
            <Route path='/addpro' exact component={ProForm} />
            <Route path='/talkToExport' exact component={talkToExport} />
          </Switch>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
