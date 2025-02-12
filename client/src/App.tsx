// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Importing page components
import HomeComponent from "./pages/home/home-component";
import MedicineInputComponent from './pages/medicine-input/medicine-input-component';
import LandComponent from "./pages/land/land-component"; 
import PrescriptionRequest from './pages/prescirption-request/prescirption-request-html';
import ViewPrescription from './pages/view-prescription/view-prescription-html';
import LoginComponent from './pages/login/login-component';
import AboutComponent from './pages/about-us/about-us-component';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
            {/* Unprotected routes */}
            <Route path='/dashboard' element={<HomeComponent />} />
            <Route path='/' element={<LandComponent />} />
            <Route path='/medicine-input' element={<MedicineInputComponent/>} />
            <Route path='/prescription-request' element={<PrescriptionRequest/>} />
            <Route path='/view-prescription' element={<ViewPrescription/>} />
            <Route path='/login' element={<LoginComponent/>} />
            <Route path='/about-us' element={<AboutComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
    
  )
}

export default App;