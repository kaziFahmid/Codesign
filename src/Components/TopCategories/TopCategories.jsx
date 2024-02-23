import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import ArrowLeftAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Pagination, Navigation } from "swiper/modules";
const isMobile = window.innerWidth <= 768;
export const TopCategories = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey =
          "gUMIBxubSwu5HBaAAVb8IX5Nd8ITaUaUuAsmqA7DFWAyHDYbfBBwyqz4"; // Replace with your Pexels API key
        const apiUrl = `https://api.pexels.com/v1/search?query=accessories`;

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from Pexels API");
        }

        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  let data = [
    {
      title: "Food",
      src: "https://i.ibb.co/sjcB39g/e995eaf7b49759299d812718fe503391.png",
    },

    {
      title: "Work Space",
      src: "https://i.ibb.co/tqG7QHM/pexels-andrew-neel-2312369.jpg",
    },

    {
      title: "City",
      src: "https://i.ibb.co/yS4nV86/fd326e9e258a053ddb7227518582c8df.png",
    },
    {
      title: "Summer",
      src: "https://i.ibb.co/MpKXzxs/pexels-pineapple-supply-co-137132.jpg",
    },
    {
      title: "Gravity",
      src: "https://i.ibb.co/Fzn2B3z/pexels-pixabay-267961.jpg",
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              mb: 1,
              color: "white",
            }}
          >
            Photo of the Day <span style={{ color: "grey" }}>by</span>{" "}
            <u>John Doe</u>
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "white", py: 2 }}>
          <Container sx={{ position: "relative" }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  mb: 0.8,
                  color: "#333333",
                }}
              >
                Top Categories
              </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={isMobile ? 1 : 4}
                centeredSlides={true}
                spaceBetween={13}
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                  },
                  960: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
              >
                {data?.map((data, index) => (
                  <SwiperSlide>
                    <Box sx={{ height: "130px", position: "relative" }}>
                      <Box
                        sx={{
                          height: "100%",
                          width: "100%",
                          background:
                            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "23px",
                            color: "white",
                            fontWeight: "400",
                          }}
                        >
                          {data?.title}
                        </Typography>
                      </Box>
                      <img
                        src={data?.src}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  width: "100%",
                  zIndex: 1300,
                  transform: "translateY(-50%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    variant="contained"
                    className="arrow-left arrow"
                    style={{
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    <ArrowLeftAltIcon
                      sx={{
                        color: "#BABABA",
                        rotate: "180deg",
                        fontSize: "28px",
                      }}
                    />{" "}
                  </button>
                  <button
                    variant="contained"
                    className="arrow-right arrow"
                    style={{
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <ArrowRightAltIcon
                      sx={{ color: "#BABABA", fontSize: "28px" }}
                    />
                  </button>
                </Box>
              </Box>
            </Box>

            <Box></Box>
          </Container>
        </Box>
      </Container>
    </>
  );
};
