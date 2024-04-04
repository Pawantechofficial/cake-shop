import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import React from "react";

const Accord = () => {
  return (
    <Accordion type="single" collapsible className="lg:w-[50%] w-full px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Do you offer same-day cake delivery in Sirsa?
        </AccordionTrigger>
        <AccordionContent>
          Orders Placed before 2:00 PM IST will be considered for Same Day
          Delivery But Orders Placed on Occasions Like Valentines day,Fathers
          day,Mothers day. Diwali, Rakhi etc may not be considered for same day
          delivery.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Do you do midnight cake delivery in Sirsa?
        </AccordionTrigger>
        <AccordionContent>
          For Midnight Delivery Prior intimation is required and is available in
          limited cities only. It will be charged extra apart from delivery
          charges, and you can call on 020-66222222 or email us at
          orders@Indiacakes.co.in in order to get the confirmation email of your
          midnight delivery before ordering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> Do you do fixed time deliveries?</AccordionTrigger>
        <AccordionContent>
          Yes, you can mention a specific delivery time in the 'Instructions to
          Florist' box in the order form. However please note that we do
          guarantee delivery of your order on your chosen date but do not
          guarantee the time always.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Can you deliver the cake early morning in Sirsa?
        </AccordionTrigger>
        <AccordionContent>
          For early morning delivery, prior intimation is required and is
          available in limited cities only. It will be charged extra. You can
          call on 020-66222222 and get the confirmation by email for Morning
          Delivery before Ordering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Do you have time slots?</AccordionTrigger>
        <AccordionContent>
          Yes we have delivery time slots and option is shown to you after you
          enter the delivery address on website , order is delivered according
          to time slot you select.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accord;
