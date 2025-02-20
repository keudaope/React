import Jokes from "./components/Jokes";
import jokesData from "./vitsitData";
import "./App.css";

function App() {
  const vitsiElementit = jokesData.map((joke) => {
    return <Jokes setup={joke.kysymys} punchline={joke.vastaus} />;
  });
  return <main>{vitsiElementit}</main>;
}

export default App;

// <Jokes
//   kysymys="I got my daughter a fridge for her birthday"
//   vastaus="I can't wait tu see her face light up when she opens it"
// />
// <Jokes
//   kysymys="How did the hacker escape the police?"
//   vastaus="He just ransomware!"
// />
// <Jokes
//   kysymys="Why don't pirates travel on mountain roads?"
//   vastaus="Scurvy"
// />
// <Jokes
//   kysymys="Why do bees stay in the hive in the winter?"
//   vastaus="Swarm"
// />
// <Jokes
//   kysymys="What's the best thing about Switzerland?"
//   vastaus="I don't know, but the flag is a big plus!"
// />
