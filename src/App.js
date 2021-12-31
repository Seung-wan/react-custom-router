import Four from './components/Four';
import Header from './components/Header';
import One from './components/One';
import Route from './components/Routes/Route';
import Three from './components/Three';
import Two from './components/Two';
function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/one">
        <One />
      </Route>
      <Route path="/two">
        <Two />
      </Route>
      <Route path="/three">
        <Three />
      </Route>
      <Route path="/four">
        <Four />
      </Route>
    </div>
  );
}

export default App;
