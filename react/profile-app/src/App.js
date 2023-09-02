import "./App.css";
import Profile from "./components/Profile";

const profileDetails = [
  {
    imgUrl: "",
    name: "John",
    role: "React Developer",
  },
  {
    imgUrl: "",
    name: "Carl",
    role: "Sr. Java Developer",
  },
  {
    imgUrl: "",
    name: "Stacy",
    role: "Jr. Full-stack Developer",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Profile List</h1>
      {profileDetails.map((profile) => (
        <Profile userDetails={profile} key={profile.name} />
      ))}
    </div>
  );
}

export default App;
