"use client";
import Box from "@mui/material/Box";
// import { useRouter } from "next/navigation";

const AppHomesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  // const router = useRouter();

  return (
    <Box position={"relative"}>
      <Box>{children}</Box>
    </Box>
  );
};

export default AppHomesLayout;
