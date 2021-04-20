import React, { useEffect, useState, useMemo } from "react";
import useSWR from "swr";
import Input from "components/input";
import Select from "components/Select";
import useFormFields from "utils/useFormFields";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/data", fetcher);
  const [formattedData, setFormattedData] = useState([]);
  const [fieldsValues, handleFieldChange] = useFormFields({});
  const [fieldsCounter, setFieldsCounter] = useState(0);

  const checkFieldVisibility = (field) => {
    if (!field?.dependencies || Object.keys(field?.dependencies).length === 0)
      return true;

    const fieldEnabled = Object.keys(fieldsValues).filter(
      (item) =>
        Object.keys(field.dependencies).filter(
          (dependency) => item === dependency
        )[0]
    )[0];

    return Boolean(fieldsValues[fieldEnabled]);
  };

  useEffect(() => {
    if (data) {
      const objectKeys = Object.keys(data);

      // Format the fields and object name to build the form
      setFormattedData(
        objectKeys.map((item, index) => {
          return {
            title: item,
            fields: data[objectKeys[index]],
          };
        })
      );
    }
  }, [data]);

  useEffect(() => {
    counterFields();
  }, [fieldsValues]);

  const counterFields = () => {
    const groups = formattedData.map((item) =>
      item.fields.filter(
        (item) => checkFieldVisibility(item) && item.type !== "checkbox"
      )
    );

    const allValidFields =
      groups?.length > 0 ? [...groups[0], ...groups[1]] : [];

    const currentValidFields = Object.keys(fieldsValues)
      .filter((item) => {
        const field = allValidFields.filter((field) => item === field.id)[0];
        return item === field?.id;
      })
      .filter((item) => fieldsValues[item] !== "");

    const total = (currentValidFields.length * 100) / allValidFields.length;
    setFieldsCounter(total > 0 ? total : 0);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {!data && (
        <p className="text-center mt-10 text-gray-600 text-xl">Loading...</p>
      )}

      {error && (
        <p className="text-center mt-10 text-gray-600 text-xl">
          Ops! We are not able to show the form
        </p>
      )}
      {data && (
        <div className="shadow-xl bg-white w-10/12 max-w-2xl m-10 p-10 rounded-md">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-end">
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {fieldsCounter.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${fieldsCounter}%` }}
                className="transition-all shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>

          {formattedData?.map((item, index) => (
            <div
              className="mt-8 rounded-md border border-gray-300 p-4"
              key={index}
            >
              <h2 className="text-gray-600 text-xl border-b border-gray-300 mb-4">
                {item.title}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {item?.fields
                  .filter((item) => checkFieldVisibility(item))
                  .map((item, index) => {
                    return item.type === "select" ? (
                      <Select
                        key={index}
                        {...item}
                        onChange={handleFieldChange}
                      />
                    ) : (
                      <Input
                        key={index}
                        {...item}
                        value={fieldsValues[item.id]}
                        onChange={handleFieldChange}
                      />
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
