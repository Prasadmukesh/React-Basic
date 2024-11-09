import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {};

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" {...register("firstName", { required: true })} />
      {errors.firstName && <p>This is required</p>}

      <label>Last name</label>
      <input type="text" {...register("lastName")} />

      <input type="submit" />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Standard Reset Field Values"
      />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="button"
        onClick={() =>
          reset({
            firstName: "tgc",
            lastName: "pitampura",
          })
        }
        value="Reset with values"
      />
    </form>
  );
}
