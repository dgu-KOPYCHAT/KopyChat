import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage";
import QuizListMainPage from "./pages/QuizListMainPage";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import GroupListPage from "./pages/GroupListPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/editor" element={<EditorPage />} />
					<Route path="/quizlist" element={<QuizListPage />} />
					<Route
						path="/quizlist/main"
						element={<QuizListMainPage />}
					/>
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/grouplist" element={<GroupListPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
