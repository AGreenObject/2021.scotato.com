import { ReactNode } from 'react'
import { Box, BoxProps, keyframes, useColorModeValue } from "@chakra-ui/react";
import { lightenDarkenColor } from '../colors'

const DIAMETER = 48
const THICKNESS = 4
const TIMING = 8 //s
const EDGEFACES = 80
const EDGEFACELENGTH = 3.14 * DIAMETER / EDGEFACES

const spin = keyframes`
  from { transform: perspective(1000px) rotateY(0deg); }
  to { transform: perspective(1000px) rotateY(360deg); }
`

const shine = keyframes`
  0%, 15% { transform: translateY(${DIAMETER * 2}px) rotate(-40deg); }
  50% { transform: translateY(-${DIAMETER}px) rotate(-40deg); }
`

interface CoinProps {
  front: ReactNode;
  back: ReactNode;
}

const CoinEdge = () => {
  const edgeColor = useColorModeValue('#AAAAAA', '#505050');
  
  return (
    <Box>
      {Array.from({length: EDGEFACES}, (v, i) => i).map((i) =>
        <Box
          key={i}
          position="absolute"
          height={`${EDGEFACELENGTH}px`}
          width={`${THICKNESS}px`}
          background={lightenDarkenColor(edgeColor, -((i - EDGEFACES / 2) * (i - EDGEFACES / 2)) / (EDGEFACES * EDGEFACES / 4) * 100 * 0.7)}
          transform={` 
            translateY(${DIAMETER / 2 - EDGEFACELENGTH / 2}px)
            translateX(${DIAMETER / 2 - THICKNESS / 2}px)
            rotateZ(${360 / EDGEFACES * i + 90}deg)
            translateX(${DIAMETER / 2 }px)
            rotateY(90deg);
          `}
        />
      )}
    </Box>
  )
}

const CoinSide = (props: BoxProps) => (
  <Box
    position='absolute'
    width={`${DIAMETER}px`}
    height={`${DIAMETER}px`}
    borderRadius='50%'
    overflow='hidden'
    backgroundColor='gray.500'
    _after={{
      content: '""',
      position: 'absolute',
      bottom: '100%',
      left: `-${DIAMETER / 2}px`,
      height: `${DIAMETER / 1.5}px`,
      width: `${DIAMETER * 2}px`,
      background: '#fff',
      opacity: 0.3,
      animation: `${shine} linear ${TIMING / 2}s infinite`,
    }}
    {...props}
  />
)

const Coin = ({ front, back }: CoinProps) => (
  <Box
    position='relative'
    width={`${DIAMETER}px`}
    height={`${DIAMETER}px`}
    animation={`${spin} ${TIMING}s linear infinite`}
    transition='all .3s'
    style={{
      transformStyle: 'preserve-3d'
    }}
  >
    <CoinSide
      transform={`translateZ(${THICKNESS / 2}px)`}
      children={front}
    />
    <CoinEdge />
    <CoinSide
      transform={`translateZ(-${THICKNESS / 2}px) rotateY(180deg)`}
      children={back}
    />
  </Box>
);

export default Coin;
