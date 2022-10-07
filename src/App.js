import classes from './App.module.scss';
import Header from './components/header/Header';
import Main from './components/main-content/Main';
import SideBar from './components/side-bar/SideBar';
function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
