// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Importing page components
import HomeComponent from "./pages/home/home-component";
import MedicineInputComponent from './pages/medicine-input/medicine-input-component';
import LandComponent from "./pages/land/land-component"; 

const App = () => {
  return (
    <AuthProvider>
        <Router>
        <Routes>
            {/* Unprotected routes */}
            <Route path='/dashboard' element={<HomeComponent />} />
            <Route path='/' element={<LandComponent />} />
            <Route path='/medicine-input' element={<MedicineInputComponent/>} />
        </Routes>
    </Router>
    </AuthProvider>
    
  )
}

export default App;