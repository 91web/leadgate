import { Dispatch, FC, Fragment, SetStateAction } from "react";
import { NavDataType } from "./static-data/data";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {
  ArrowDropDown,
  ArrowDropUp,
  Facebook,
  Instagram,
  X,
  YouTube,
} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { usePathname } from "next/navigation";

interface LGroupDrawerComponentProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  openDrawer: boolean;
  drawerWidth: number;
  navState: NavDataType[];
  handleNavClick: (nav: NavDataType) => void;
}
export const GroupDrawerComponent: FC<LGroupDrawerComponentProps> = (props) => {
  const { openDrawer, setOpenDrawer, navState, handleNavClick, drawerWidth } =
    props;
  const pathname = usePathname();
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      variant="temporary"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        position: "relative",
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List sx={{ pt: 2 }}>
          {navState.map((page, i) => (
            <Fragment key={page.id}>
              <Link
                href={
                  !page.subNav
                    ? (`/${pathname.split("/")[1]}${page.url}` as string)
                    : ""
                }
              >
                <ListItem
                  sx={{
                    "&:hover": { backgroundColor: "var(--app-gray-color)" },
                    borderBottom: "1px solid var(--app-text-color-dark)",
                    backgroundColor: page.active
                      ? "var(--app-default-color)"
                      : "transparent",
                    px: 0,
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      if (!page.subNav) setOpenDrawer(!openDrawer);
                      handleNavClick(page);
                    }}
                  >
                    <ListItemText>
                      <Typography fontSize={"1rem"} color={"#344054"}>
                        {page.name}
                      </Typography>
                    </ListItemText>
                    {page.subNav && page.subNav?.length > 0 && (
                      <>{page.openSub ? <ArrowDropUp /> : <ArrowDropDown />}</>
                    )}
                  </ListItemButton>
                </ListItem>
              </Link>
              <Collapse in={page.openSub} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {page.subNav?.map((subPage) => (
                    <Link key={subPage.id} href={`${subPage.url}` as string}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText>
                          <Typography fontSize={"0.9rem"} color={"#344054"}>
                            {subPage.name}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
              {i !== navState.length - 1 && <Divider variant="middle" />}
            </Fragment>
          ))}
        </List>
      </Box>
      <Box width={"100%"} px={1} position={"absolute"} bottom={20}>
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <YouTube />
          </IconButton>
          <IconButton>
            <X />
          </IconButton>
        </Stack>
      </Box>
    </Drawer>
  );
};
