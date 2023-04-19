import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/services`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto mt-5 mb-5 add-container">
      <h2>Please Add a Service</h2>
      <form
        className="d-flex flex-column mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-2 mb-2 border border-2 rounded"
          placeholder="Title"
          {...register("title", { required: true, maxLength: 20 })}
        />
        <textarea
          className="p-2 mb-2 border border-2 rounded"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="p-2 mb-2 border border-2 rounded"
          placeholder="Image URL"
          type="text"
          {...register("img")}
        />

        <input className="btn btn-primary" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
