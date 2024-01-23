import { IoIosStarOutline } from "react-icons/io";
import style from "./style.module.scss";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdColorFill } from "react-icons/io";
import { MdClose } from "react-icons/md";

export const TaskCard = () => {
  return (
    <li className={style.container}>
      <div>
        <h2 className="title">asdsadasd</h2>
        <IoIosStarOutline className={style.favorite} />
      </div>
      <div className={style.none}>
        <p className="paragraph">asdasdasd</p>
        <nav>
          <section>
            <MdOutlineEdit />
            <IoMdColorFill />
          </section>
          <MdClose />
        </nav>
      </div>
    </li>
  );
};
