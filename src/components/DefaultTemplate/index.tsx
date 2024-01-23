import { Header } from "../Header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const DefaultTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="main__container">{children}</main>
    </>
  );
};
