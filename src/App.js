import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' exact element={<HomeScreen />} />
            <Route path='/product/:id' exact element={<ProductScreen />} />
            {/* <Route path='/product/:id' render={(props) => <ProductScreen {...props} />} /> */}
          </Routes>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
