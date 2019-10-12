import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./components/Message";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header></Header>
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer></ProductsContainer>
              <Message></Message>
              <CartContainer></CartContainer>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
