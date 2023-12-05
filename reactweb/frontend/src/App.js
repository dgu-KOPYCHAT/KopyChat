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
import Board from './pages/Board'; // 

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() =>{
    
    axios.post('http://localhost:3000/user/auth/silent-refresh',{}, {
      withCredentials:true
    }).then(res=> {
      console.log(res);
      const {accessToken} = res.data;
      console.log(accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLoggedIn(true)
    });


  },[])
	return (
		<div>
      {isLoggedIn && <nav >로그인 되었습니다.</nav>}

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
					<Route path="/board" element={<Board />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;