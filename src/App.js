import "./App.css";
import Header from "./Components/001_Header/Header"
import ProdukteList from "./Components/002_Main/Produkte/ProdukteList";
import Footer from "./Components/003_Footer/Footer"

function App() {
	return (
		<div className="App">
      <Header />
			<ProdukteList />
      <Footer />
		</div>
	);
}

export default App;
