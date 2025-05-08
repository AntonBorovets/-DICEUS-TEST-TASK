import userImage from "./image/user.png";

export default function Header() {
  return (
    <div className="header">
      <div className="item">
        <h1>Hi Arthur, welcome! You have 12 open tasks.</h1>
      </div>
      <div className="item">
        <input type="text" placeholder="Search" />
        <img alt="icon person" src={userImage} />
      </div>
    </div>
  );
}
