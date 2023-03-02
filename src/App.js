import "./App.css";
import Card from "./Components/Blogs/CardType";
import BlogS from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import RatesTypeS from "./Components/RatesTypeS/RatesTypeS";
import Advitisment from "./Components/Advitisment/Advitisment";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <RatesTypeS />
      <Card />
      <BlogS />
      <Advitisment />
      <Footer />

    </div>
  );
}

export default App;
