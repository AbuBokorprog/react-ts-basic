import Box from "./Box";
import Generic from "./Generic";

function App() {
  return (
    <>
      <Box heading={"hello"} func1={(a: string) => alert(a)}>
        {<>hello</>}
      </Box>
      {/* <Generic label={"label"} value={""} onChange={() => {}} /> */}
    </>
  );
}

export default App;
