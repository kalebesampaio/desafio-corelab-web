import Logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import { MdClose } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

type Props = {
  search: string;
  setSearch: (str: string) => void;
};

export const Header = ({ search, setSearch }: Props) => {
  return (
    <>
      <header className={style.container}>
        <div className={style.containerBox}>
          <img src={Logo} alt="Logo" />
          <nav>
            <input
              type="search"
              placeholder="Pesquisar notas"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MdOutlineSearch className={style.search} />
          </nav>

          <MdClose className={style.closeBtn} />
        </div>
      </header>
    </>
  );
};
