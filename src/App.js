import { Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import AddNewsPage from './containers/AddNewsPage/AddNewsPage';
import NewsPage from './containers/News/NewsPage';
import OneNewsPage from './containers/News/OneNewsPage/OneNewsPage';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path='/' exact component={NewsPage} />
          <Route path='/addNews' component={AddNewsPage} />
          <Route path='/oneNews' component={OneNewsPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
