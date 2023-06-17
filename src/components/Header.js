import "./Header.css"
import {BsSun,BsFillMoonStarsFill} from "react-icons/bs";

export default function Header({theme,setTheme}) {
  function toggleTheme(){
    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
      {/* <span>{theme}</span> */}
      <span className="icon" onClick={toggleTheme}>{theme==="light"?<BsFillMoonStarsFill/>:<BsSun/>}</span></div>
    </header>
  );
}
