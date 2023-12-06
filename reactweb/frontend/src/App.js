import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage";
import QuizListMainPage from "./pages/QuizListMainPage";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import QuizInsertPage from "./pages/QuizInsertPage";
import GroupListPage from "./pages/GroupListPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import QuizSearchPage from "./pages/QuizSearchPage";
import BoardPage from "./pages/BoardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		axios
			.post(
				"http://localhost:3000/user/auth/silent-refresh",
				{},
				{
					withCredentials: true,
				}
			)
			.then((res) => {
				console.log(res);
				const { accessToken } = res.data;
				console.log(accessToken);
				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${accessToken}`;
				setIsLoggedIn(true);
			});
	}, []);
	return (
		<div>
			{isLoggedIn && <nav>로그인 되었습니다.</nav>}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/*" element={<NotFoundPage />} />
					{/* <Route path="/login" element={<LoginPage />} /> */}

					<Route path="/quizsearch" element={<QuizSearchPage />} />
					<Route path="/quizlist" element={<QuizListPage />} />
					<Route path="/quizlist/main" element={<QuizListMainPage />} />
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/quizinsert" element={<QuizInsertPage />} />
					
					<Route path="/postwrite" element={<Board />} />
					<Route path="/board" element={<BoardPage />} />
					
					<Route path="/editor" element={<EditorPage />} />
					<Route path="/user" element={<UserPage />} />
					
					<Route path="/grouplist" element={<GroupListPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
