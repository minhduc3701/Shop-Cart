import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Cart from "./components/Cart";
import ProductsContainer from "./containers/ProductsContainer";

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
              <Cart></Cart>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
