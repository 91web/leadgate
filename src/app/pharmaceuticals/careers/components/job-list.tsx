"use client";

import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { SetStateAction, useState } from "react";
import Line1 from "../../../../assets/svg/career-line.svg";
import Line2 from "../../../../assets/img/all-job1.png";
import Location from "../../../../assets/img/location-logo.png";
import Time from "../../../../assets/img/time-logo.png";
import Image from "next/image";
import { JobData, JobType } from "./static-data/data";

export default function JobListings() {
  const jobs: JobType[] = JobData;

  const [selectedCategory, setSelectedCategory] = useState("All Jobs");

  const handleCategoryChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <Box sx={{ bgcolor: "#F9FAFB", py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={Line1.src}
                  alt="Line career"
                  height={25}
                  width={125}
                />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "inter",
                    color: "#6B8F24",
                    mb: 1,
                    fontSize: { xs: "12px", md: "16px" },
                    textAlign: "center",
                    fontWeight: "regular",
                    display: "flex",
                    alignItems: "center",
                    mx: 2,
                  }}
                >
                  More about Jobs with Leadgate
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={Line1.src}
                  alt="Line career"
                  height={25}
                  width={125}
                />
              </Box>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "lora",
                color: "#344054",
                mb: 1,
                fontSize: { xs: "24px", md: "30px" },
                textAlign: "center",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", md: "70%" },
              }}
            >
              Unlock your True Potential and Discover a World of Opportunities
              in the Medical Area
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "inter",
                color: "#475467",
                mb: 1,
                fontSize: { xs: "14px", md: "16px" },
                textAlign: "center",
                fontWeight: "regular",
                display: "flex",
                alignItems: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est.
            </Typography>
          </Stack>

          {/* Categories */}
          <Box>
            {/* For Desktop: Buttons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                variant={
                  selectedCategory === "All Jobs" ? "contained" : "outlined"
                }
                onClick={() => setSelectedCategory("All Jobs")}
                sx={{
                  color: selectedCategory === "All Jobs" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "All Jobs" ? "#D0D5DD" : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "All Jobs" ? "#D0D5DD" : "#D0D5DD",
                  },
                }}
              >
                <Box px={1}>
                  <Image src={Line2.src} alt="all job" height={10} width={15} />
                </Box>
                All Jobs
              </Button>
              <Button
                variant={
                  selectedCategory === "Media" ? "contained" : "outlined"
                }
                onClick={() => setSelectedCategory("Media")}
                sx={{
                  color: selectedCategory === "Media" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "Media" ? "#D0D5DD" : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "Media" ? "#D0D5DD" : "#D0D5DD",
                  },
                }}
              >
                Media
              </Button>
              <Button
                variant={
                  selectedCategory === "Marketing" ? "contained" : "outlined"
                }
                onClick={() => setSelectedCategory("Marketing")}
                sx={{
                  color: selectedCategory === "Marketing" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "Marketing"
                      ? "#D0D5DD"
                      : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "Marketing" ? "#D0D5DD" : "#D0D5DD",
                  },
                }}
              >
                Marketing
              </Button>
              <Button
                variant={
                  selectedCategory === "Human Resource"
                    ? "contained"
                    : "outlined"
                }
                onClick={() => setSelectedCategory("Human Resource")}
                sx={{
                  color:
                    selectedCategory === "Human Resoource" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "Human Resource"
                      ? "#D0D5DD"
                      : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "Human Resource"
                        ? "#D0D5DD"
                        : "#D0D5DD",
                  },
                }}
              >
                Human Resource
              </Button>
              <Button
                variant={
                  selectedCategory === "Project Manager"
                    ? "contained"
                    : "outlined"
                }
                onClick={() => setSelectedCategory("Project Manager")}
                sx={{
                  color:
                    selectedCategory === "Project Manager" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "Project Manager"
                      ? "#D0D5DD"
                      : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "Project Manager"
                        ? "#D0D5DD"
                        : "#D0D5DD",
                  },
                }}
              >
                Project Manager
              </Button>
              <Button
                variant={
                  selectedCategory === "Designer" ? "contained" : "outlined"
                }
                onClick={() => setSelectedCategory("Designer")}
                sx={{
                  color: selectedCategory === "Designer" ? "#000" : "#475467",
                  fontSize: "14px",
                  borderRadius: "16px",
                  borderColor: "#D0D5DD",
                  textTransform: "none",
                  fontFamily: "inter",
                  bgcolor:
                    selectedCategory === "Designer" ? "#D0D5DD" : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === "Designer" ? "#D0D5DD" : "#D0D5DD",
                  },
                }}
              >
                Designer
              </Button>
            </Stack>
            {/* For Mobile: Select */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                fullWidth
                displayEmpty
                sx={{
                  fontFamily: "inter",
                  borderRadius: "16px",
                  bgcolor: "#F3F4F6",
                  textAlign: "center",
                  borderColor: "#D0D5DD",
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        justifyContent: "center",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="All Jobs">
                  <Box display="flex" alignItems="center" gap={10}>
                    <Image
                      src={Line2.src}
                      alt="all job"
                      height={13}
                      width={25}
                    />
                    <Box px={1}>All Jobs</Box>
                  </Box>
                </MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Human Resource">Human Resource</MenuItem>
                <MenuItem value="Project Manager">Project Manager</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Job Cards */}
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid size={{ xs: 12, md: 4 }} key={job.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "white",
                    borderRadius: 2,
                    //  boxShadow: "none",
                    // border: "1px solid #E5E7EB",
                  }}
                >
                  <CardContent sx={{ p: 3, flex: 1 }}>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "inter",
                            color: "#344054",
                            mb: 1,
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Image
                          src={job.src}
                          alt={job.title}
                          height={24}
                          width={24}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          mb: 1,
                          fontSize: "14px",
                          fontWeight: "regular",
                        }}
                      >
                        {job.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mt: "auto" }}
                      >
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Box px={1}>
                            <Image
                              src={Location.src}
                              alt="Location"
                              height={24}
                              width={24}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "inter",
                              color: "#6B8F24",
                              mb: 1,
                              fontSize: "14px",
                              fontWeight: "regular",
                            }}
                          >
                            {job.location}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Box px={1}>
                            <Image
                              src={Time.src}
                              alt="Location"
                              height={24}
                              width={24}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "inter",
                              color: "#6B8F24",
                              mb: 1,
                              fontSize: "14px",
                              fontWeight: "regular",
                            }}
                          >
                            {job.type}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Button
                        variant="contained"
                        sx={{
                          color: "#fff",
                          width: "40%",
                          textTransform: "none",
                          bgcolor: "#344054",
                          "&:hover": {
                            bgcolor: "#344054",
                            opacity: 0.8,
                          },
                        }}
                      >
                        Apply now
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
