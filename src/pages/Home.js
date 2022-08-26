import "../App.css";
import Header from "./Header";
import Content from "./Content";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

// This file declares the header and content

function Home() {
  // console.log(window.location);

  return (
    <div className="App">
    <Header />
    <Content />
        
    </div>
  );
}

export default Home;
