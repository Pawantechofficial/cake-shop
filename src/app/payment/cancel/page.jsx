"use client";
import { useCheckPaymentMutation } from "@/src/provider/redux/query/Checkout.query";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
const SuccessPage = (props) => {
  console.log({ props });
  const [checkPayment, checkPaymentResponse] = useCheckPaymentMutation();
  const paymentCheckoutHandler = async () => {
    try {
      if (!props.searchParams.token) {
        return false;
      }
      const { data, error } = await checkPayment(props.searchParams.token);
      if (error) {
        toast.error(error.data.error);
        return;
      }
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    paymentCheckoutHandler();
  }, []);
  return (
    <div className="h-screen mt-16">
      {" "}
      {checkPaymentResponse.isLoading ? "loading..." : "Payment Canceled"}
    </div>
  );
};

export default SuccessPage;
