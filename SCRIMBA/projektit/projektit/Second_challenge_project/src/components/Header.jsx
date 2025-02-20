import globe from "../assets/globe_white.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={globe} width="40px" alt="globe" />
        <h1>My travel journal</h1>
      </header>
    </>
  );
}
