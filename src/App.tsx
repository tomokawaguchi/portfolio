import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProjectsListPage from "./containers/ProjectsListPage/ProjectsListPage";
import HomeMain from "./containers/HomeMain/HomeMain";
import ProjectPage from "./containers/ProjectPage/ProjectPage";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<HomeMain />} />
					<Route path="/projects" element={<ProjectsListPage />} />
					<Route path="/projects/:id" element={<ProjectPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
