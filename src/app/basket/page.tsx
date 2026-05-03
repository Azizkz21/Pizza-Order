import React from "react";
import Basket from "../../componentsPages/Basket";
import type { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Basket",
  description: "Desc Basket",
};

export default function BasketPage({}: Props) {
  return (
    <>
      <Basket />
    </>
  );
}
