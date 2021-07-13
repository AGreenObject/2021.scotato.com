import { useState } from 'react'
import { SquircleMask } from "@scotato/react-squircle";
import Button from './Button'
import AspectRatio from './AspectRatio'
import { Link, Grid,  Stack,  Image,  useColorModeValue } from "@chakra-ui/react";

interface GalleryProps {
  images?: string[];
}

const Gallery = ({ images = [] }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const activeImage = images[activeIndex]

  return (
    <SquircleMask p1={8} p2={32} style={{display: 'flex'}}>
      <Stack spacing={0} bg={bg} flexGrow={1}>
        <Link href={activeImage} target="_blank">
          <Image bg="gray.500" src={activeImage} fallback={<AspectRatio ratio={1280 / 800} />} />
        </Link>
        <Grid
          p={[2, 4]}
          gridColumnGap={[2, 4]}
          alignItems="center"
          gridAutoColumns="1fr"
          gridAutoFlow="column"
          borderTop="2px"
          borderColor={borderColor}
        >
          {images.map((image, index) => {
            return (
              <Button key={index} p={0} height="auto" onClick={() => setActiveIndex(index)}>
                <Image
                  bg="gray.500"
                  filter={index === activeIndex ? 'initial' : 'grayscale(1)'}
                  opacity={index === activeIndex ? 1 : 0.5}
                  fallback={<AspectRatio ratio={1280 / 800} />}
                  transition="filter 0.2s ease-in-out, opacity 0.2s ease-in-out"
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
