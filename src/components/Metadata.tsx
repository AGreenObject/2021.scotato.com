import { Helmet } from 'react-helmet'

interface MetadataProps {
  title: string;
  description: string;
  banner: string;
  icon: string;
}

function Metadata ({ title, description, banner, icon }: MetadataProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
      <meta name="description" content={description} />
      <meta property="image" content={banner} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={banner} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={banner} />
    </Helmet>
  )
}

export default Metadata
