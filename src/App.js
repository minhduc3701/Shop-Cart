import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageContainer from "./containers/MessageContainer";
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
              <MessageContainer></MessageContainer>
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
