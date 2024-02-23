import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Images = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey =
          "gUMIBxubSwu5HBaAAVb8IX5Nd8ITaUaUuAsmqA7DFWAyHDYbfBBwyqz4"; // Replace with your Pexels API key
        const apiUrl = `https://api.pexels.com/v1/search?query=people`;

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
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [isLoading]);

  console.log(photos);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: { xs: 25, sm: 26, md: 27 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            mt: 3,
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>All</Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#9C9C9C", fontWeight: "500" }}
          >
            Photos
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#9C9C9C", fontWeight: "500" }}
          >
            Videos
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#9C9C9C", fontWeight: "500" }}
          >
            Freebies
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#9C9C9C", fontWeight: "500" }}
          >
            360
          </Typography>
        </Box>

        {isLoading ? (
          <Box>
            <Grid container spacing={1}>
              {[...new Array(8)].map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" height={400} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box mt={3}>
            <Grid container spacing={1}>
              {photos.map((data, index) => (
                <Grid
                  data-aos="fade-right"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <img
                      src={data?.src.original}
                      alt={`photo-${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
};
