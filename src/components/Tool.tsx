import { List, ListItem } from "@chakra-ui/react";
import { Brand, BrandListIcon } from './Brand'

export const ToolList = ({ tools = [] }: { tools?: Brand[] }) => {
  return (
    <List spacing={3}>
      {tools.map((brand) => (
        <ListItem key={brand}>
          <BrandListIcon brand={brand} />
          {brand}
        </ListItem>
      ))}
    </List>
  )
}
