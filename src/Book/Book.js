import React, { useState } from "react";
import { Box, makeStyles, createStyles, Button } from "@material-ui/core";
import Cover from "../assets/images/cover.jpeg";
import Page1 from "../assets/images/1.jpeg";
import Page2 from "../assets/images/2.jpeg";
import Page3 from "../assets/images/3.jpeg";
import End from "../assets/images/end.jpeg";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "./CoverPage";
import Page from "./Page";

const Book = () => {
  const [flipBook, setFlipBook] = useState(null);

  const nextButtonClick = () => {
    flipBook.getPageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBook.getPageFlip().flipPrev();
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        ref={(el) => setFlipBook(el)}
      >
        <CoverPage>
          <Box>
            <img src={Cover} width="100%" />
          </Box>
        </CoverPage>

        <Page number={1}>
          <Box border="1px solid black">
            <img src={Page1} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page2} width="100%" />
          </Box>
        </Page>
        <Page number={2}>
          <Box border="1px solid black">
            <img src={Page3} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page2} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page3} width="100%" />
          </Box>
        </Page>
        <Page number={3}>
          <Box border="1px solid black">
            <img src={Page1} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page2} width="100%" />
          </Box>
        </Page>
        <Page number={4}>
          <Box border="1px solid black">
            <img src={Page3} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page2} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page3} width="100%" />
          </Box>
        </Page>
        <Page number={5}>
          <Box border="1px solid black">
            <img src={Page1} width="100%" />
          </Box>
          <Box border="1px solid black">
            <img src={Page2} width="100%" />
          </Box>
        </Page>
        <CoverPage>
          <Box>
            <img src={End} width="100%" />
          </Box>
        </CoverPage>
      </HTMLFlipBook>
      <div>
        <Button onClick={prevButtonClick} variant="outlined">
          Previous page
        </Button>

        <Button onClick={nextButtonClick} variant="outlined">
          Next page
        </Button>
      </div>
    </Box>
  );
};

export default Book;
