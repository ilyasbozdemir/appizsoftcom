import React from "react";

function ExternalFonts() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" crossorigin />

      <link rel="preconnect" href="https://www.dafontfree.net" />
      <link rel="dns-prefetch" href="https://www.dafontfree.net" />

      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Raleway:ital,wght@0,200;1,300&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Raleway:ital,wght@0,200;1,300&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="preload"
        href="https://www.dafontfree.net/embed/bW9udHNlcnJhdC1leHRyYS1ib2xkJmRhdGEvMTYvbS83ODYzMy9Nb250c2VycmF0LUV4dHJhQm9sZC5vdGY"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;600&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@300;600&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />

      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />

      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&family=Raleway:wght@600&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />

      <link
        rel="preload"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="preload"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
    </>
  );
}

export default ExternalFonts;
