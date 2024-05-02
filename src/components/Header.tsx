import "./Header.module.css";
import rocket from "../assets/rocket.svg";

export  function Header() {
  return (
    
    <header>
      <div>
        <img src={rocket} alt="navi" />
        <h1><span>to</span>do</h1>
      </div>
    </header>
  )
}
