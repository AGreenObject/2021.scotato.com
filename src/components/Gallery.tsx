import { useState } from 'react'
import { Grid, Stack, Image, useColorModeValue } from "@chakra-ui/react";
import { SquircleMask } from "@scotato/react-squircle";
import Button from './Button'
import AspectRatio from './AspectRatio'

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const bg = useColorModeValue("white", "gray.900");
  const activeImage = images[activeIndex]

  return (
    <SquircleMask p1={8} p2={48} style={{display: 'flex'}}>
      <Stack spacing={0} bg={bg} flexGrow={1}>
        <Image bg="gray.500" src={activeImage} fallback={<AspectRatio ratio={1280 / 800} />} />
        <Grid
          p={4}
          gridColumnGap="16px"
          alignItems="center"
          gridAutoColumns="1fr"
          gridAutoFlow="column"
        >
          {images.map((image, index) => {
            return (
              <Button key={index} p={0} height="auto" onClick={() => setActiveIndex(index)}>
                <Image
                  bg="gray.500"
                  filter={index === activeIndex ? 'initial' : 'grayscale(1)'}
                  opacity={index === activeIndex ? 1 : 0.5}
                  fallback={<AspectRatio ratio={1280 / 800} />}
                  src={image}
                />
              </Button>
            )
          })}
        </Grid>
      </Stack>
    </SquircleMask>
  );
};

export default Gallery;
