import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import { FaVimeoV } from "react-icons/fa6";
export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "white",
        py: 2,
      }}
    >
      <Typography
        sx={{
          color: "#E17800",
          fontWeight: 600,
          fontSize: { xs: 16, sm: 26, md: "20px" },
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <CropOriginalIcon sx={{ fontSize: "30px" }} />

        <span>Click Motto</span>
      </Typography>

      <Box sx={{ display: { md: "none" } }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: "#E17800" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <ul
            className="nav-text"
            style={{
              padding: "5px",
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <li>
              <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
                Explore
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ fontWeight: "400", color: "#A7A7A7", fontSize: "13px" }}
              >
                {" "}
                Discover
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ fontWeight: "400", color: "#A7A7A7", fontSize: "13px" }}
              >
                {" "}
                For Professionals
              </Typography>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box>
                <MoreHorizIcon
                  id="basic-button"
                  aria-controls={open2 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                  sx={{ color: "#A7A7A7" }}
                />

                <Menu
                  sx={{
                    ".MuiList-root": {
                      background: "#111111",
                      color: "#5F5F5F",
                      width: "230px",
                      position: "relative",
                    },
                  }}
                  id="basic-menu"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    About Click Motto
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    Pricing
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    License
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    Partnerships
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    Blog
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    Help
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose2}
                    sx={{
                      "&:hover": {
                        bgcolor: "#1C1C1C",
                        color: "white",
                      },
                    }}
                  >
                    Join The Team
                  </MenuItem>

                  <MenuItem
                    sx={{
                      borderTop: "2px solid #151515",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></MenuItem>
                </Menu>
              </Box>
            </li>
            <li>
              <Button
                variant="contianed"
                sx={{
                  bgcolor: "white",
                  border: "1px solid black",
                  boxShadow: 1,
                  textTransform: "capitalize",
                }}
              >
                Submit Photos
              </Button>
            </li>

            <li>
              <Typography sx={{ fontSize: "13px" }}>Login</Typography>
            </li>

            <li>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  background: "#E17800",
                  "&:hover": {
                    background: "#E17800",
                  },
                  textTransform: "capitalize",
                }}
              >
                Join Free
              </Button>
            </li>
          </ul>
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ul
          className="nav-text"
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <li>
            <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
              Explore
            </Typography>
          </li>
          <li>
            <Typography
              sx={{ fontWeight: "400", color: "#A7A7A7", fontSize: "13px" }}
            >
              {" "}
              Discover
            </Typography>
          </li>
          <li>
            <Typography
              sx={{ fontWeight: "400", color: "#A7A7A7", fontSize: "13px" }}
            >
              {" "}
              For Professionals
            </Typography>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box>
              <MoreHorizIcon
                id="basic-button"
                aria-controls={open2 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
                sx={{ color: "#A7A7A7" }}
              />

              <Menu
                sx={{
                  ".MuiList-root": {
                    background: "#111111",
                    color: "#5F5F5F",
                    width: "230px",
                    position: "relative",
                  },
                }}
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  About Click Motto
                </MenuItem>
                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  Pricing
                </MenuItem>

                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  License
                </MenuItem>
                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  Partnerships
                </MenuItem>

                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  Blog
                </MenuItem>

                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  Help
                </MenuItem>

                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    "&:hover": {
                      bgcolor: "#1C1C1C",
                      color: "white",
                    },
                  }}
                >
                  Join The Team
                </MenuItem>

                <MenuItem
                  sx={{
                    borderTop: "2px solid #151515",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <FacebookIcon sx={{ color: "#D87301" }} />
                  <TwitterIcon sx={{ color: "#D87301" }} />
                  <InstagramIcon sx={{ color: "#D87301" }} />
                  <PinterestIcon sx={{ color: "#D87301" }} />
                  <img
                    src="    https://i.ibb.co/6ZzH03P/icons8-vimeo-50.png"
                    style={{ width: "18px", height: "18px" }}
                  />

                  <img
                    src="https://i.ibb.co/xHCq1LK/icons8-m-50.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                </MenuItem>
              </Menu>
            </Box>
          </li>
          <li
            style={{ borderRight: "1px solid #A7A7A7", paddingRight: "18px" }}
          >
            <Button
              variant="contianed"
              sx={{
                color: "grey",
                bgcolor: "white",
                border: "1px solid grey",
                boxShadow: 1,
                textTransform: "capitalize",
              }}
            >
              Submit Photos
            </Button>
          </li>

          <li>
            <Typography sx={{ fontSize: "13px" }}>Login</Typography>
          </li>

          <li>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                background: "#E17800",
                "&:hover": {
                  background: "#E17800",
                },
                textTransform: "capitalize",
              }}
            >
              Join Free
            </Button>
          </li>
        </ul>
      </Box>
    </Box>
  );
};
