import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import EditorPage from "./components/EditorPage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/editor" element={<EditorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
