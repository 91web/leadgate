<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid  xs={6}>
  <Box >
<Typography
  //  variant="overline"
  sx={{
    color: "#AE883B",
    fontSize: "16px",
    textTransform: "none",
    fontWeight: "regular",
    letterSpacing: "0.1em",
    mb: 1,
    display: "block",
  }}
>
  Testimonials
</Typography>

<Typography
  variant="h2"
  sx={{
    fontFamily: "lora",
    color: "#000",
    fontSize: "26px",
    fontWeight: "medium",
    mb: 3,
  }}
>
  Client Reviews
</Typography>
<NavigationButtons />
</Box>
  </Grid>
  <Grid item xs={6}>
  <Box width={{ xs: 300, md: 1500 }}>
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  onSwiper={setSwiper}
  pagination={{ clickable: true, el: null }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  breakpoints={{
    640: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
  }}
  style={{ overflow: "visible", height: "100%" }}
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          mb: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 70, height: 70 }}
              />
            }
            title={
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#344054",
                  fontFamily: "inter",
                  fontSize: "20px",
                }}
              >
                {testimonial.name}
              </Typography>
            }
            subheader={
              <Typography
                variant="body2"
                sx={{
                  color: "#808080",
                  fontSize: "14px",
                  fontWeight: "regular",
                  fontFamily: "inter",
                }}
              >
                {testimonial.title}
              </Typography>
            }
          />
          <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.primary",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontFamily: "inter",
                fontSize: "15px",
              }}
            >
              {testimonial.feedback}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </SwiperSlide>
  ))}
</Swiper>
</Box>
  </Grid>


</Grid2>



