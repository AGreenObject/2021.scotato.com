import React from "react";
import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Grid
      minH="100vh"
      minW="100vw"
      gridTemplateColumns={["100vw", "280px 1fr 280px"]}
      gridTemplateRows={["auto auto auto", "auto"]}
      pb={['calc(98px + env(safe-area-inset-bottom))', 0]}
      children={children}
    />
  );
}

export default Layout;
