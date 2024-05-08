
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Header />
      <Nav />
      <main className="flex-grow-1 mx-3"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;