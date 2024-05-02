import style from  "./Header.module.css";
import rocket from "../assets/rocket.svg";

export  function Header() {
  return (
    
    <header className={style.headerMain}>
      <div>
        <img src={rocket} alt="navi" />
        <h1><span>to</span>do</h1>
      </div>
    </header>
  )
}
