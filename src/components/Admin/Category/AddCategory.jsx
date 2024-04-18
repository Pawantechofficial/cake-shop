"use client";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import React from "react";
import { toast } from "react-toastify";
import { useAddCategoryMutation } from "@/src/provider/redux/query/AdminCategory.query";

const AddCategory = () => {
  const [addCategoryFn, addCategoryFnResponse] = useAddCategoryMutation();
  const validationSchema = yup.object({
    categoryName: yup.string().required("Name is Required"),
    image: yup.mixed().required("category image Required"),
  });
  const initialValues = {
    categoryName: "",
    image: null,
  };
  const onSubmitHandler = async (e, { resetForm }) => {
    try {
      const form = new FormData();
      form.append("image", e.image);
      form.append("category_name", e.categoryName);

      const { data, error } = await addCategoryFn(form);
      if (error) {
        toast.error(error.data?.error);
        return;
      }
      toast.success(data?.msg);

      resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="flex flex-wrap mb-6">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Category Name
                </label>
                <Field
                  name={"categoryName"}
                  className="appearance-none block w-full text-gray-700 ring-black ring-[.3px] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Birthday"
                />
                <ErrorMessage
                  name="categoryName"
                  component={"p"}
                  className="text-red-500"
                />
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Category Image
                </label>
                <input
                  onChange={(e) => {
                    setFieldValue("image", e.target.files[0]);
                  }}
                  name={"image"}
                  className="appearance-none block w-full text-gray-700 ring-black ring-[.3px] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="file"
                  placeholder="Birthday"
                />
                <ErrorMessage
                  name="image"
                  component={"p"}
                  className="text-red-500"
                />
              </div>

              <div className="w-full justify-center px-3 mb-6 md:mb-0">
                <button
                  disabled={addCategoryFnResponse.isLoading}
                  type="submit"
                  className="text-white bg-blue-500 py-1 px-2 rounded"
                >
                  {addCategoryFnResponse.isLoading
                    ? "Loading..."
                    : "Add Category"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddCategory;
