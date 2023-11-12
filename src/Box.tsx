import { ReactNode } from "react";

type boxType = {
  heading: string;
  count?: number;
  func1: (a: string) => void;
  children: ReactNode;
};

const Box = ({ heading, count, func1, children }: boxType) => {
  func1("hello world!");
  return (
    <div>
      <h1>{heading}</h1>
      {count && <p>{count}</p>}
      {children}
    </div>
  );
};

export default Box;
