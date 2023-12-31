import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage";
import IdleEditorPage from "./pages/IdleEditorPage";
import QuizListMainPage from "./pages/QuizListMainPage";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import QuizInsertPage from "./pages/QuizInsertPage";
import GroupListPage from "./pages/GroupListPage";
import UserPage from "./pages/UserPage";
import QuizSearchPage from "./pages/QuizSearchPage";
import BoardPage from "./pages/BoardPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Board from "./pages/Board";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/*" element={<NotFoundPage />} />

					<Route path="/quizsearch" element={<QuizSearchPage />} />
					<Route path="/quizlist" element={<QuizListPage />} />
					<Route
						path="/quizlist/main"
						element={<QuizListMainPage />}
					/>
					<Route path="/quiz/:id" element={<QuizPage />} />
					<Route path="/quizeditor/:id" element={<EditorPage />} />
					<Route path="/quizinsert" element={<QuizInsertPage />} />

					<Route path="/postwrite" element={<Board />} />
					<Route path="/board" element={<BoardPage />} />
					<Route path="/post/:id" element={<PostPage />} />

					<Route path="/editor" element={<IdleEditorPage />} />
					<Route path="/user" element={<UserPage />} />

					<Route path="/grouplist" element={<GroupListPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
