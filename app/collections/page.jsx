import BottomBanner from "@/Components/Collections/BottomBanner/BottomBanner";
import CarsListing from "@/Components/Collections/CarsListing/CarsListing";
import PageHeader from "@/Components/Collections/PageHeader/PageHeader";
import React from "react";

const Collections = () => {
  return (
    <>
      <PageHeader />
      <CarsListing />
      <BottomBanner />
    </>
  );
};

export default Collections;
