import { Field, Form, Formik } from "formik";
import React, { useCallback } from "react";
import api from "../services/api";

const initialValues = {
  name: "",
  prix: 0,
  description: "",
};

const AddProducts = () => {
  const handleSubmit = useCallback(async ({ name, prix, description }) => {
    if (!name | !prix | !description) {
      // window.alert("Ooops");
      alert("Tous les champs sont obligatoire!");

      return;
    }
    const {
      data: { result },
    } = await api.post("/api/products", {
      name,
      prix,
      description,
    });
    console.log(result);
  }, []);
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl">Ajouter une produit:</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-3 items-center">
          <label>name:</label>
          <Field
            type="text"
            name="name"
            className="border-2 border-black px-2 rounded"
          />
          <label>prix:</label>
          <Field
            type="number"
            name="prix"
            className="border-2 border-black px-2 rounded"
          />
          <label>description **:</label>
          <Field
            as="textarea"
            name="description"
            className="border-2 border-black px-2 rounded"
            placeholder="description"
          />
          <button
            type="submit"
            className="bg-blue-600 active:bg-blue-300 text-white w-[20%]"
          >
            ADD
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProducts;
