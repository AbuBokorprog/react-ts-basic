# React Props + destructuring: TypeScript Type Defined

```tsx
//app.tsx
import Box from "./Box";

function App() {
  return (
    <>
      <Box heading={"hello"} count={45} />
    </>
  );
}

export default App;

//Basic
//box.tsx
const Box = ({ heading, count }: { heading: string; count: number }) => {}
OR
type boxType = {
  heading: string;
  count: number;
};

const Box = ({ heading, count }: boxType) => {}
```
## In props function passing:
```tsx
//Basic
//App.tsx
<Box heading={"hello"} count={45} func1={() => alert("hello")} />
//Box.tsx

type boxType = {
  heading: string;
  count: number;
  func1: () => void;
};

const Box = ({ heading, count, func1 }: boxType) => {
  func1();
}

//Advanced: If the parameter passes in function and children pass
//App.tsx
import Box from "./Box";

function App() {
  return (
    <>
      <Box
        heading={"hello"}
        count={45}
        func1={(a: string) => alert(a)}
        children={<>hello</>}
      />
    </>
  );
}

export default App;

OR
<Box heading={"hello"} count={45} func1={(a: string) => alert(a)}>
        {<>hello</>}
</Box>

//Box.tsx

import { ReactNode } from "react";

type boxType = {
  heading: string;
  count: number;
  func1: (a: string) => void;
  children: ReactNode;
};

const Box = ({ heading, count, func1, children }: boxType) => {
  func1("hello world!");
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
};

export default Box;
```
## Default Value:
```tsx
type boxType = {
  heading: string;
  count?: number;
  func1: (a: string) => void;
  children: ReactNode;
};

const Box = ({ heading, count=5, func1, children }: boxType) => {} //count=5 5 is default value
```
## Optional Value:
```tsx
type boxType = {
  heading: string;
  count?: number;
  func1: (a: string) => void;
  children: ReactNode;
};

const Box = ({ heading, count, func1, children }: boxType) => {} //count is optional value
```
## Generic Type:
```tsx
//App.tsx
import Box from "./Box";
import Generic from "./Generic";

function App() {
  return (
    <>
      <Box heading={"hello"} func1={(a: string) => alert(a)}>
        {<>hello</>}
      </Box>
      <Generic label={"label"} value={""} onChange={() => {}} />
    </>
  );
}

export default App;


//Generic.tsx

type InputValType = string | number;

const Generic = <T extends InputValType>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <div>
      <form>
        <label htmlFor={label}></label>
        <input type="text" name="" value={value} id="" onChange={onChange} />
      </form>
    </div>
  );
};

export default Generic;
```
