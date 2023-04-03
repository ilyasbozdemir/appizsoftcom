import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import MetaHead from '../components/shared/MetaHead'
import { useRouter } from 'next/router'

export default function HomePage() {
  const router = useRouter()
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath)
  const [site, setSite] = React.useState({
    author: ``,
    title: `Appizsoft • Özel Yazılım & Dijital Pazarlama &#199;&#246;z&#252;mleri`,
    url: currentUrl,
    image: '',
    imageAlt: 'site-logo-png',
    description: ``,
    name: ``,
    keywords: '',
  })

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
        />
      </>
      <></>
    </>
  )
}
