import React from "react";
import Home from "../componentsPages/Home";
import type { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Home",
  description: "Desc Home",
};

export default function HomePage({}: Props) {
  return (
    <>
      <Home />
    </>
  );
}
