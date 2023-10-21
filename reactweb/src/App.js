import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/editor" element={<EditorPage />} />
					<Route path="/quizlist" element={<QuizListPage />} />
					<Route path="/quiz" element={<QuizPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
