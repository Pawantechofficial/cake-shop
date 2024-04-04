import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const PriceRange = () => {
  const Cakes = [
    {
      title: "Birthday Cake",
      Amount: "₹250.00",
      title2: "Kids Birthday Cakes",
    },
    {
      title: "Anniversary Cake",
      Amount: "₹150.00",
      title2: "Designer Cakes",
    },
    {
      title: "Cakes for Girls",
      Amount: "₹350.00",
      title2: "Special Cakes	",
    },
    {
      title: "Cake for Boys",
      Amount: "₹450.00",
      title2: "Personalized Birthday Cake",
    },
    {
      title: "Wedding Cakes",
      Amount: "₹550.00",
      title2: "Engagement Cakes",
    },
  ];
  return (
    <Table className="w-[80%] mx-auto border rounded-lg">
      {/* <TableCaption>A list of price range.</TableCaption> */}
      <TableHeader className="w-full">
        <TableRow>
          <TableHead className="w-[300px">Cake Delivery by Occasion</TableHead>
          <TableHead>Cake by Category</TableHead>
          <TableHead className="text-right">Start at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Cakes.map((cake, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{cake.title}</TableCell>
            <TableCell>{cake.title2}</TableCell>
            <TableCell className="text-right">{cake.Amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PriceRange;
