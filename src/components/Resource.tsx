import { List, ListItem } from "@chakra-ui/react";
import { Project } from './Project'
import { Brand, BrandListIcon } from './Brand'
import Link from '../components/Link'

export type Resource = {
  brand: Brand;
  url: string;
  text: string;
}

export const ResourceList = ({ resources = [] }: Project) => {
  return (
    <List spacing={3}>
      {resources.map(({ brand, url, text }) => (
        <ListItem key={brand}>
          <Link to={url}>
            <BrandListIcon brand={brand} />
            {text}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}