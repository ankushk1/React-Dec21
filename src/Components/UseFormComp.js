import React from "react";
import { useFormHook, useTheme } from "../utils/useFromHook";

const UseFormComp = () => {
  console.log(useFormHook());
  const { values, onHandleChange, onSubmit } = useFormHook();
  const { theme, renderButton } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "75vh"
      }}
    >
      {/* <form action="">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={(event) => onHandleChange(event)}
        />
      </form> */}

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis
        repellat earum, minus labore, amet quia saepe consectetur eum pariatur
        magni quaerat doloribus, at voluptatem perspiciatis nulla. Expedita
        repellendus a numquam commodi nesciunt deserunt laborum natus, tempora
        nemo, aut porro consequatur temporibus molestias tempore optio impedit
        sapiente? Nisi optio dolor cum sunt nihil molestias officiis tenetur
        eum? Debitis quam, explicabo autem vero unde dolorum corrupti
        distinctio? Doloribus velit illum, sunt iusto hic eum consectetur atque
        suscipit ut unde reprehenderit maiores sapiente voluptatem laborum ipsum
        nobis impedit error blanditiis. Assumenda aut voluptatum perferendis,
        inventore adipisci explicabo repellat error consequuntur voluptate
        nostrum!
      </div>
      <div
        style={{
          marginTop: "30px"
        }}
      >
        <div>
        {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default UseFormComp;
