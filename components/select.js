const Select = ({ sourceList, label, id, onChange }) => (
  <label className="block">
    <span className="text-gray-700">{label}</span>
    <select
      id={id}
      onChange={onChange}
      className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
    >
      <option value=""></option>
      {sourceList?.map((item, index) => (
        <option key={index} value={item?.name || sourceList[index]}>
          {item?.name || item}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
