import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage";
import QuizListMainPage from "./pages/QuizListMainPage";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import GroupListPage from "./pages/GroupListPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import QuizSearchPage from "./pages/QuizSearchPage";
import BoardPage from "./pages/BoardPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/editor" element={<EditorPage />} />
					<Route path="/quizsearch" element={<QuizSearchPage />} />
					<Route path="/quizlist" element={<QuizListPage />} />
					<Route
						path="/quizlist/main"
						element={<QuizListMainPage />}
					/>
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/post" element={<PostPage />} />
					<Route path="/grouplist" element={<GroupListPage />} />
					<Route path="/board" element={<BoardPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/user" element={<UserPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
