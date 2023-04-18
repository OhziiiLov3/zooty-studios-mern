// import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../../components/NavBar';
// import LoginPage from '../LoginPage/LoginPage'
import MovieListPage from '../MovieListPage/MovieListPage'

function App() {
  // const [user, setUser] = useState(null)

  return (
    <main className="App">
      <>
      <NavBar/>
      <Routes>
        <Route path='/movies' element={<MovieListPage/>}/>
      </Routes>
      </>
    </main>
  );
}

export default App;
