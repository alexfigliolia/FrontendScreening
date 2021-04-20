import classNames from "classNames";
import InputMask from "react-input-mask";

const Input = ({ type, label, definition, id, mask, value, onChange }) => {
  if (type !== "checkbox") {
    const hasMask = mask && Object.keys(mask).length > 0;
    const InputComponent = !hasMask ? "input" : InputMask;

    return (
      <label className="block">
        <span className="text-gray-700">{label}</span>
        <InputComponent
          type={type}
          id={id}
          mask={hasMask ? Object.values(mask) : null}
          onChange={onChange}
          className={classNames(
            "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",
            { "bg-red-100": value === "" }
          )}
          placeholder={definition}
          value={value || ""}
        />
      </label>
    );
  }

  if (type === "checkbox") {
    return (
      <label className="inline-flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={value || false}
          onChange={onChange}
          className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    );
  }
};

export default Input;
