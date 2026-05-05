import Header from './header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Diaries from './diaries/Diaries';
import Auth from './auth/Auth';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
