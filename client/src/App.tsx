// App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importing page components
import HomeComponent from "./pages/home/home-component";

const App = () => {
  return (
    <Router>
        <Routes>
            {/* Unprotected routes */}
            <Route path='/' element={<HomeComponent />} />
        </Routes>
    </Router>
  )
}

export default App;