import Logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import { MdClose } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header className={style.container}>
        <div className={style.containerBox}>
          <img src={Logo} alt="Logo" />
          <nav>
            <input type="search" placeholder="Pesquisar notas" />
            <MdOutlineSearch className={style.search} />
          </nav>

          <MdClose className={style.closeBtn} />
        </div>
      </header>
    </>
  );
};
