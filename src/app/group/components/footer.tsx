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
 
    </Box>
  );
};
