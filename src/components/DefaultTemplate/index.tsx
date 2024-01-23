import { Header } from "../Header";

type Props = {
  children: JSX.Element | JSX.Element[];
  search: string;
  setSearch: (str: string) => void;
};

export const DefaultTemplate = ({ children, search, setSearch }: Props) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main__container">{children}</main>
    </>
  );
};
