import Navbar from "./components/navbar";
import Home from "./components/home";
import Create from "./components/create";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<Create />
						</Route>
						<Route exact path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
