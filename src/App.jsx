import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";
import About from "./components/About";
import Porfolio from "./components/Porfolio";
import Experience from "./components/Experience";

function App() {
	return (
		<div>
			<NavBar/>
			<Home/>
			<About/>
			<Porfolio/>
			<Experience/>
			<SocialLinks/>
		</div>
	);
}

export default App;
