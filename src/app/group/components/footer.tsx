"use client";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import { FC, Fragment } from "react";
import { LFooterType } from "./static-data/data";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { SvgIcon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

interface LAppFooterProps {
  footerData: LFooterType[];
  marginB?: number;
}

export const LAppFooter: FC<LAppFooterProps> = (props) => {
  const { footerData, marginB } = props;
  const pathname = usePathname();

  return (
    <Box
      bgcolor={"#1D2939"}
      py={{ xs: 4, md: 6 }}
      mb={pathname === "/pharmaceuticals" ? marginB : 0}
    >
      <Container maxWidth={"lg"}>
        <Box>
          <Grid2 container component={"div"} spacing={2}>
            {footerData?.map((footer) => (
              <Fragment key={footer?.id}>
                {footer.id === "logoSection" || footer.id === "socials" ? (
                  <Grid2 size={{ xs: 12, md: 3 }} key={footer?.id}>
                    <Box>
                      {footer.logo && (
                        <Box height={"fit-content"} my={2}>
                          <Box component={"a"} href={footer.logoUrl}>
                            <Image
                              src={footer.logo.src}
                              alt={footer.title || ""}
                              width={100}
                              height={60}
                            />
                          </Box>
                        </Box>
                      )}
                      {footer.title && (
                        <Typography fontSize={"0.9rem"} fontWeight={500}>
                          {footer.title}
                        </Typography>
                      )}
                      {footer.description && (
                        <Typography pt={1} fontSize={"0.8rem"} color="white">
                          {footer.description}
                        </Typography>
                      )}
                      <Box pt={2} textAlign={{ xs: "left", md: "right" }}>
                        {footer.socials && (
                          <Box
                            pb={2}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: { xs: "start", md: "end" },
                              gap: 2,
                            }}
                          >
                            {footer.socials.map((social) => (
                              <Box
                                key={social.id}
                                component={"a"}
                                href={social.url}
                                target="_blank"
                              >
                                <SvgIcon
                                  component={social.icon}
                                  inheritViewBox
                                  sx={{
                                    color: "white",
                                    fontSize: "1.5rem",
                                  }}
                                />
                              </Box>
                            ))}
                          </Box>
                        )}
                        {footer.address && (
                          <Typography py={1} fontSize={"0.8rem"} color="white">
                            {footer.address}
                          </Typography>
                        )}
                        {footer.phone && (
                          <Typography py={1} fontSize={"0.8rem"} color="white">
                            {footer.phone}
                          </Typography>
                        )}
                        {footer.email && (
                          <Typography py={1} fontSize={"0.8rem"} color="white">
                            {footer.email}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Grid2>
                ) : (
                  <Grid2 size={{ xs: 12, md: 2 }} key={footer?.id}>
                    <Box>
                      {footer.title && (
                        <Typography
                          pt={1}
                          pb={2}
                          color="white"
                          fontSize={"0.9rem"}
                          fontWeight={500}
                        >
                          {footer.title}
                        </Typography>
                      )}
                      {footer.description && (
                        <Typography color="white" fontSize={"0.8rem"}>
                          {footer.description}
                        </Typography>
                      )}
                      {footer.navs?.map((nav) => (
                        <Box key={nav.id} pt={1}>
                          <Typography
                            component={"a"}
                            href={nav.url}
                            color="white"
                            fontSize={"0.8rem"}
                          >
                            {nav.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid2>
                )}
              </Fragment>
            ))}
          </Grid2>
        </Box>
      </Container>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 0 },
          right: { xs: 20, md: "auto" },
          left: { xs: "auto", md: 0 },
          width: { xs: "auto", md: "100%" },
          bgcolor: { xs: "transparent", md: "#fff" },
          zIndex: 1000,
          py: { xs: 0, md: 2 },
          display: "flex",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: "center",
          boxShadow: { xs: "none", md: "0 -2px 10px rgba(0,0,0,0.1)" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              minWidth: "50px",
              minHeight: "50px",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
            }}
          >
            <WhatsAppIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              color: "#475467",
              minWidth: "50px",
              minHeight: "50px",
              borderRadius: "50%",
              borderColor: "#6B8F24",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#E0E0E0",
              },
            }}
          >
            <LocationOnIcon />
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            maxWidth: "600px", 
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              color: "#475467",
              borderColor: "#6B8F24",
              "&:hover": {
                backgroundColor: "#E0E0E0",
              },
              textTransform: "none",
              width: "200px",
            }}
          >
            <LocationOnIcon sx={{ mr: 1 }} /> Locate our Store
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
              textTransform: "none",
              width: "200px",
            }}
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> Chat on WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
