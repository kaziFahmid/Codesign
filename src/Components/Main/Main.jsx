import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Banner } from "../Banner/Banner";
import { Box } from "@mui/material";
import { TopCategories } from "../TopCategories/TopCategories";
import { Images } from "../Images/Images";

export const Main = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ position: "relative" }}>
        <Banner />

        <Box
          sx={{
            position: "absolute",
            left: "0%",
            right: "0%",
            top: { xs: "80%", sm: "90%" },
          }}
        >
          <TopCategories />
        </Box>
      </Box>
      <Images />
    </>
  );
};
