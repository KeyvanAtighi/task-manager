// main css
import "./App.css";

// components
import Search from "./components/Search";
import BottomNavBar from "./components/BottomNavBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div>
        <Search />
      </div>
      <div>
        <TaskList />
      </div>
      <div>
        <BottomNavBar />
      </div>
    </>
  );
}

export default App;
