import Route from './components/Routes/Route';

import Header from './components/Header';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Route path='/one'>
        <One />
      </Route>

      <Route path='/two'>
        <Two />
      </Route>

      <Route path='/three'>
        <Three />
      </Route>

      <Route path='/four'>
        <Four />
      </Route>
    </div>
  );
};

export default App;
