import '../styles/components/logo.scss';

function Header({ logo }) {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Rick and Morty logo"
        title="Rick and Morty logo"
      />
    </header>
  );
}

export default Header;
