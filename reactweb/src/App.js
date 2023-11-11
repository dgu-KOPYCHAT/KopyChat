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
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

//import About from './About';
//import Login from './Login';
//import Main from './Main';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
					<Route path="/grouplist" element={<GroupListPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/user" element={<UserPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
