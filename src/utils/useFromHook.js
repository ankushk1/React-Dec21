import { useEffect } from "react";
import { useState } from "react";

export const useFormHook = () => {
  const [values, setValues] = useState({});

  const onHandleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log("Submit");
  };

  return {
    values,
    onHandleChange,
    onSubmit
  };
};

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const renderButton = () => {
    return (
      <button
        style={{
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          border: "none",
          backgroundColor: "grey"
        }}
        onClick={onThemeChange}
      >
        {theme === "dark" ? (
          <i style={{ color: "yellow" }} class="fa-solid fa-sun"></i>
        ) : (
          <i style={{ color: "white" }} class="fa-solid fa-moon"></i>
        )}
      </button>
    );
  };

  return {
    theme,
    onThemeChange,
    renderButton
  };
};

export const useFetch = (url, value) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {

    fetch(`${url}/${value}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchData();
  }, [value, url]);

  return { data };
};
