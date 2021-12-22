import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductFeature from './features/Product';
import { HeaderDesktop } from './components/common/Header';
import Home from 'pages/Home';
import Footer from 'components/common/Footer';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack minHeight="100vh">
      <HeaderDesktop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<ProductFeature />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;
