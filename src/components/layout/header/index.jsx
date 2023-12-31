import "./header.css";

function Header(props) {
  const { title } = props;
  return (
    <header className="header-format">
      <div>{title}</div>
    </header>
  );
}

export default Header;
