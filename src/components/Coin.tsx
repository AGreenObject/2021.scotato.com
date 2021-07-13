import { ReactNode } from 'react'
import { Box, BoxProps, keyframes, useColorModeValue } from "@chakra-ui/react";
import { lightenDarkenColor } from '../colors'

export interface CoinProps {
  front?: ReactNode;
  back?: ReactNode;
  diameter?: number;
  thickness?: number;
  timing?: number;
  edgeFaces?: number;
}

const DIAMETER = 48
const THICKNESS = 4
const TIMING = 8 //s
const EDGEFACES = 80

const edgeFaceLength = (diameter: number, edgeFaces: number) => 3.14 * diameter / edgeFaces

const CoinEdge = ({ diameter = DIAMETER, thickness = THICKNESS, edgeFaces = EDGEFACES }: CoinProps) => {
  const edgeColor = useColorModeValue('#AAAAAA', '#505050');
  const faceLength = edgeFaceLength(diameter, edgeFaces)
  
  return (
    <Box>
      {Array.from({length: edgeFaces}, (v, i) => i).map((i) =>
        <Box
          key={i}
          position="absolute"
          height={`${faceLength}px`}
          width={`${thickness}px`}
          background={lightenDarkenColor(edgeColor, -((i - edgeFaces / 2) * (i - edgeFaces / 2)) / (edgeFaces * edgeFaces / 4) * 100 * 0.7)}
          transform={` 
            translateY(${diameter / 2 - faceLength / 2}px)
            translateX(${diameter / 2 - thickness / 2}px)
            rotateZ(${360 / edgeFaces * i + 90}deg)
            translateX(${diameter / 2 }px)
            rotateY(90deg);
          `}
        />
      )}
    </Box>
  )
}

const CoinSide = ({diameter = DIAMETER, timing = TIMING, ...props}: BoxProps & CoinProps) => {
  const shine = keyframes`
    0%, 15% { transform: translateY(${diameter * 2}px) rotate(-40deg); }
    50% { transform: translateY(-${diameter}px) rotate(-40deg); }
  `

  return (
    <Box
      position='absolute'
      width={`${diameter}px`}
      height={`${diameter}px`}
      borderRadius='50%'
      overflow='hidden'
      backgroundColor='gray.500'
      _after={{
        content: '""',
        position: 'absolute',
        bottom: '100%',
        left: `-${diameter / 2}px`,
        height: `${diameter / 1.5}px`,
        width: `${diameter * 2}px`,
        background: '#fff',
        opacity: 0.3,
        animation: `${shine} linear ${timing / 2}s infinite`,
      }}
      {...props}
    />
  )
}

const Coin = ({
  front,
  back,
  diameter = DIAMETER,
  thickness = THICKNESS,
  timing = TIMING,
  edgeFaces = EDGEFACES,
  ...props
}: CoinProps & BoxProps) => {
  const spin = keyframes`
    from { transform: perspective(1000px) rotateY(0deg); }
    to { transform: perspective(1000px) rotateY(360deg); }
  `
  
  return (
  <Box
    position='relative'
    width={`${diameter}px`}
    height={`${diameter}px`}
    animation={`${spin} ${timing}s linear infinite`}
    transition='all .3s'
    style={{
      transformStyle: 'preserve-3d'
    }}
    {...props}
  >
    <CoinSide
      transform={`translateZ(${thickness / 2}px)`}
      diameter={diameter}
      timing={timing}
      children={front}
    />
    <CoinEdge diameter={diameter} thickness={thickness} edgeFaces={edgeFaces} />
    <CoinSide
      transform={`translateZ(-${thickness / 2}px) rotateY(180deg)`}
      diameter={diameter}
      timing={timing}
      children={back}
    />
  </Box>
);}

export default Coin;
