"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useGetCartsQuery } from "@/src/provider/redux/query/Cart.query";
import { useCheckoutPaymentMutation } from "@/src/provider/redux/query/Checkout.query";

const CheckoutPage = () => {
  const [AddCheckout, AddCheckoutResponse] = useCheckoutPaymentMutation();
  const { data, isLoading, isError } = useGetCartsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong.</div>;
  }
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "name is atleast 3 characters"),
    email: yup
      .string()
      .required("email is required")
      .email("email must be valid"),
    address: yup
      .string()
      .required("address is required")
      .min(3, "address is atleast 3 characters"),
    pin_code: yup
      .string()
      .required("email is required")
      .min(6, "enter 6 digits pin code")
      .max(6, "enter 6 digits pin code"),
    city: yup.string().required("city is required"),
    message: yup.string().required("message is required"),
  });
  const initialValue = {
    name: "",
    email: "",
    address: "",
    pin_code: "",
    message: "",
    city: "",
  };
  const onSubmitHandler = async (e, { resetForm }) => {
    try {
      const { data, error } = await AddCheckout(e);
      if (error) {
        toast.error(error.data.error);
        return;
      }
      if (!data) {
        toast.error(error.data.error);
        return;
      }
      window.location.href = data.url;
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Checkout
            </h1>
          </div>
          <div className="w-full md:w-[90%] lg:w-[50%] mx-auto">
            <h1 className="text-black text-xl">
              Total Price: &#8377;-{data && data.totalPrice} /-
            </h1>
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={onSubmitHandler}
          >
            <Form className="w-full md:w-[90%] lg:w-[50%] mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="name"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="email"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <Field
                      rows={3}
                      as="textarea"
                      type="text"
                      id="address"
                      name="address"
                      className="w-full resize-none bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="address"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      City
                    </label>
                    <Field
                      type="text"
                      id="city"
                      name="city"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="city"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="pin_code"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Pin Code
                    </label>
                    <Field
                      type="text"
                      id="pin_code"
                      name="pin_code"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="pin_code"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <Field
                      rows={3}
                      as="textarea"
                      type="text"
                      id="message"
                      name="message"
                      className="w-full resize-none bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      component={"p"}
                      name="message"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  {data && data.totalPrice > 0 && (
                    <button
                      disabled={AddCheckoutResponse.isLoading}
                      type="submit"
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      {AddCheckoutResponse.isLoading
                        ? "loading..."
                        : "Checkout"}
                    </button>
                  )}
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
