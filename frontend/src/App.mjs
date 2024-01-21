import { useContext } from "react";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { AuthContext } from "./state/AuthContext.js";

// app.js

const express = require('express');
const app = express();

// ここにアプリケーションのルーティングと設定を追加

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function App() {
	const { user } = useContext(AuthContext);
  return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
				<Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
