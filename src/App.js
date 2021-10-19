import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Info from './Pages/Info/Info';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/info/:infoId">
                  <Info></Info>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
