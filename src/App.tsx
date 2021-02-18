import React from "react";

const data = require("./data");

interface Input {
  definition: string;
  id: string;
  type: string;
  label: string;
  mask?: RegExp;
  dependencies?: boolean[];
  sourceList?: Array<string | { name: string; code: string }>;
}

export const App = () => {
  const sections = Object.keys(data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <form>
          {sections.map((section) => (
            <div
              key={section}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                {section}
              </p>
              {data[section].map(
                ({ definition, id, type, label, sourceList }: Input) => (
                  <React.Fragment key={id}>
                    <label htmlFor={id}>{label}</label>
                    {type === "select" ? (
                      <select id={id} defaultValue="DEFAULT">
                        <option disabled value="DEFAULT">
                          {definition}
                        </option>
                        {sourceList?.map((item, index) => {
                          if (typeof item === "string") {
                            return (
                              <option value={item} key={index}>
                                {item}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.code} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    ) : (
                      <input
                        type={type}
                        id={id}
                        placeholder={definition}
                      ></input>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
