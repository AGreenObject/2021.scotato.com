import { Text, useColorModeValue } from "@chakra-ui/react";
import { ProjectPage, ProjectCard, ProjectSidebar } from '../components/Project'
import Section from '../components/Section'
import Link from '../components/Link'
import GNOMIES from '../projects/GnomiesProject'

export function GnomiesPage() {
  const colorCommon = useColorModeValue('gray.500', 'gray.400')
  const colorUncommon = useColorModeValue('green.500', 'green.400')
  const colorRare = useColorModeValue('blue.500', 'blue.400')
  const colorEpic = useColorModeValue('purple.500', 'purple.400')
  const colorLegendary = useColorModeValue('orange.500', 'orange.400')
  const colorMythic = useColorModeValue('red.500', 'red.400')
  const colorCopper = useColorModeValue('orange.400', 'orange.300')
  const colorSilver = useColorModeValue('gray.400', 'gray.300')
  const colorGold = useColorModeValue('yellow.400', 'yellow.300')
  const colorDiamond = useColorModeValue('cyan.400', 'cyan.300')

  return (
    <ProjectPage project={GNOMIES}>
      <Section title="Overview">
        <Text>Gnomies is an experiment in community, digital identity, and algorithmically generated artwork. A Gnomie is an <Link to="https://ethereum.org/en/developers/docs/standards/tokens/erc-721/">NFT</Link> that represents stake in a community, can be bought/sold/traded, and can be used as an avatar in that community and on social media.</Text>
        <Text>Each Gnomie is unique and has special qualities such as where they are from, what type of Gnomie they are, the items and equipment they possess and the rarity of those items.</Text>
        <Text>Each item has a rarity which is color coded to the item and follows rarity coloring similar to those found in RPGs: <Text as="span" color={colorCommon}>Common</Text>, <Text as="span" color={colorUncommon}>Uncommon</Text>, <Text as="span" color={colorRare}>Rare</Text>, <Text as="span" color={colorEpic}>Epic</Text>, <Text as="span" color={colorLegendary}>Legendary</Text> and <Text as="span" color={colorMythic}>Mythic</Text>. In addition to item rarities, items made of metal follow similar rarity guidelines in the form of: <Text as="span" color={colorCopper}>Copper</Text>, <Text as="span" color={colorSilver}>Silver</Text>, <Text as="span" color={colorGold}>Gold</Text> and <Text as="span" color={colorDiamond}>Diamond</Text>.</Text>
        <Text>This project was inspired by the legendary blockchain project <Link to="https://www.larvalabs.com/cryptopunks">CryptoPunks</Link>, a collection of 10,000 unique NFT avatars released in June 2017.</Text>
      </Section>

      <Section title="Utility">
        <Text>One of the many interesting aspects of NFTs is that they can be used as a form of authentication. Specifically, an individual can verify that they own a Gnomie, which can be used in place of a traditional username and password.</Text>
        <Text>Following the release of this project, I plan to build and release a companion project that can be used by Gnomie holders. To extend the concept of digital identity, I plan to build a digital wardrobe web app that can view the NFTs contained in your crypto wallet and let you select one to automatically change your avatar on connected apps such as Twitter, Discord, and Steam.</Text>
        <Text>Beyond the digital wardrobe, the goal is for the project to be directed by the community and Gnomie holders. As the community grows, the value of a Gnomie increases. Gnomie holders will govern the direction of the project by voting on feature development.</Text>
      </Section>

      <Section title="Architecture">
        <Text>This project is being developed as a monorepo that contains several sub-modules:</Text>
        <Text><strong>Token</strong>: A package that extracts artwork from Figma and generates 10,000 Gnomie NFTs with associated metadata.</Text>
        <Text><strong>Contract</strong>: A package that implements the <Link to="https://docs.openzeppelin.com/contracts/4.x/erc721">OpenZeppelin ERC721 solidity contract</Link>.</Text>
        <Text><strong>Web</strong>: A package that provides a web app to interact with the Gnomies contract and crypto wallet using <Link to="https://github.com/ethers-io/ethers.js">ethers</Link>.</Text>
        <Text><strong>API</strong>: A package that handles GraphQL requests about Gnomies and uses <Link to="https://infura.io/">Infura</Link> to retrieve information from the Ethereum blockchain.</Text>
      </Section>
      
      <Section title="Progress">
        <Text>Gnomies is close to launching. I have created artwork for 30 different types of Gnomies consisting of ~200 unique artwork assets which expands to ~1400 unique assets when rarity colors are applied. </Text>
        <Text>The ERC721 solidity contract, which allows 10,000 Gnomies to be minted and exchanged, has been implemented and tested on a local development blockchain.</Text>
        <Text>The initial web app, minting mechanism and wallet connections have been setup and deployed. Additional UI/UX polishing is required before entering production.</Text>
        <Text>The initial API has been connected to the Gnomies contract and can retrieve and provide information about Gnomies that have been minted.</Text>
        <Text>The next steps are to refine some of the Gnomie metadata, integrate OpenSea, investigate L2 scaling options to reduce gas costs such as Polygon or ZK Rollups, finalize the Web and API packages, and to initiate marketing for the project. The current plan is to offer each Gnomie at 0.01 ETH.</Text>
      </Section>
    </ProjectPage>
  )
}

export const GnomiesSidebar = () => <ProjectSidebar project={GNOMIES} />
export const GnomiesCard = () => <ProjectCard project={GNOMIES} />
