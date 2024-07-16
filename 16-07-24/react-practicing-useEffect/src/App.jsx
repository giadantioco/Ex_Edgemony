import UserPosts from "./UserPosts.jsx";
import Timer from "./Timer.jsx";
import LocalStorage from "./LocalStorage.jsx";

function App() {
  return (
    <div>
      <h1>Use Effect Practice</h1>
      <h2>Fetch User Post</h2>
      <UserPosts />
      <h2>Timer</h2>
      <Timer />
      <h2>Local Storage</h2>
      <LocalStorage />
    </div>
  );
}

export default App;
