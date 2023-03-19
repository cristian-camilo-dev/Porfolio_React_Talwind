import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";
import About from "./components/About";
import Porfolio from "./components/Porfolio";

function App() {
	return (
		<div>
			<NavBar/>
			<Home/>
			<About/>
			<Porfolio/>
			<SocialLinks/>
		</div>
	);
}

export default App;
