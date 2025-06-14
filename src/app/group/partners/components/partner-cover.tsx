import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PartnerHero1 from "../../../../assets/img/partner-cover1.png";

export default function PartnerHero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "650px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
        backgroundImage: `url(${PartnerHero1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "28px", md: "40px" },
            mb: 2,
          }}
        >
          Our Valued Partners
        </Typography>

        <Box>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: "17px",
              fontFamily: "'Inter'",
              fontWeight: "regular",
              color: "#fff",
              width: { xs: "100%", md: "40%" },
            }}
          >
            At Leadgate Groups, we recognize that success is built on strong
            partnerships
          </Typography>
          <Box>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: "white" }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: "17px",
                    color: "#fff",
                    fontWeight: "regular",
                    fontFamily: "inter",
                  }}
                >
                  Collaborating for Excellence
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: "white" }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: "17px",
                    color: "#fff",
                    fontWeight: "regular",
                    fontFamily: "inter",
                  }}
                >
                  A Shared Commitment to Innovation
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: "white" }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: "17px",
                    color: "#fff",
                    fontWeight: "regular",
                    fontFamily: "inter",
                  }}
                >
                  Integrity & Trust
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: "white" }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: "17px",
                    color: "#fff",
                    fontWeight: "regular",
                    fontFamily: "inter",
                  }}
                >
                  Growing Together
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-start",
            alignItems: "left",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#AE883B",
              color: "#fff",
              "&:hover": {
                backgroundColor: "darkgoldenrod",
              },
              textTransform: "none",
              width: { xs: "150px", sm: "200px" },
            }}
          >
            Learn More
          </Button>
       {  /* <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "#fff",
              },
              textTransform: "none",
              width: { xs: "120px", sm: "150px" },
            }}
          >
            Book Demo
          </Button>*/}
        </Box>
      </Container>
    </Box>
  );
}
