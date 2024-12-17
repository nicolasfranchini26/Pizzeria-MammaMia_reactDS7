import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Footer, NotFound, Profile} from './views/index';
import { Home, RegisterPage, Pizza, Cart, Login } from './pages/index';
import { CartProvider } from './context/CartContext';
import { UserProvider, useUserContext } from './context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>  {/* Proveedor del contexto */}
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;