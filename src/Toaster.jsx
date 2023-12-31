import React from "react";
import { Toaster as ToasterContainer } from "react-hot-toast";

const Toaster = () => {
  return (
    <ToasterContainer
      position="top-right"
      reverseOrder={false}
      gutter={8}
      //   containerClassName=""
      containerStyle={{
        top: 80,
      }}
      toastOptions={{
        // Define default options
        className: "",
        duration: 3000,
        style: {
          background: "#363636",
          color: "#fff",
          padding: "16px",
        },
        // Default options for specific types
        success: {
          duration: 4000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
};

export default Toaster;
