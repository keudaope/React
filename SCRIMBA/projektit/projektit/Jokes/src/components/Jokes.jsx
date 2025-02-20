export default function Jokes(props) {
  return (
    <div className="vitsi">
      <h2 className="setup">{props.setup}</h2>
      <p>{props.punchline}</p>
    </div>
  );
}
