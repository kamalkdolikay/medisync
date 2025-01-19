// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing page components
import HomeComponent from "./pages/home/home-component";
import LandComponent from "./pages/land/land-component"; 

const App = () => {
  return (
    <Router>
        <Routes>
            {/* Unprotected routes */}
            <Route path='/dashboard' element={<HomeComponent />} />
            <Route path='/' element={<LandComponent />} />
        </Routes>
    </Router>
  )
}

export default App;