import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import RatesTypeS from "./Components/RatesTypeS/RatesTypeS";
import Card from "./Components/Blogs/CardType";
import BlogS from "./Components/Blogs/Blogs";
import Advitisment from "./Components/Advitisment/Advitisment";
// import Footer from "./Components/Footer/Footer";
// import DropD from './Components/DropDown/DropDown'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <RatesTypeS />
      <Card />
      <BlogS />
      <Advitisment />
      {/* <Footer /> */}

      {/* <DropD /> */}

    </div>
  );
}

export default App;
