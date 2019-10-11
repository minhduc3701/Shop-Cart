import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Cart from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header></Header>
          <main id="mainContainer">
            <div className="container">
              <Products></Products>
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
