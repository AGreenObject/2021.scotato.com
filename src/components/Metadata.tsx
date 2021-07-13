import { Helmet } from 'react-helmet'
import { Project } from './Project'

function Metadata (project: Project) {
  return (
    <Helmet>
      <title>{project.title}</title>
      <link rel="icon" href={`/${project.id}-app-icon.png`} />
      <link rel="apple-touch-icon" href={`/${project.id}-app-icon.png`} />
      <meta name="description" content={project.description} />
      <meta property="image" content={project.banner} />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.banner} />
      <meta name="twitter:title" content={project.title} />
      <meta name="twitter:description" content={project.description} />
      <meta name="twitter:image" content={project.banner} />
    </Helmet>
  )
}

export default Metadata
