import style from "./style.module.scss";
import { IoIosStarOutline } from "react-icons/io";

export const Form = () => {
  return (
    <form className={style.container}>
      <div>
        <input type="text" placeholder="Título" className={style.inpt} />
        <IoIosStarOutline className={style.favorite} />
      </div>
      <div className={style.none}>
        <textarea
          className={`${style.inpt} ${style.area}`}
          placeholder="Criar nota..."
        />
      </div>
    </form>
  );
};
