import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import LoginPage from './pages/Login'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
      </div>
      
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/blog" exact={true} component={BlogPage} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/login" exact={true} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
