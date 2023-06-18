import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="assets/image3.png" alt="logo" className="logo" />
        <nav className="navMobile">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Diary</a>
            </li>
            <li>
              <a href="/">Perfil</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
