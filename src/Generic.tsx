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
        <input
          type="text"
          name=""
          value={value}
          id=""
          onChange={onChange}
        />{" "}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Generic;
