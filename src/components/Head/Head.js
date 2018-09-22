import React from 'react'
import { Head } from 'react-static'
//
import favicon from '../../assets/images/icons/code.png'

const head = () => {
  return (
    <Head>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <title>Brian Stern | Developer</title>
      <meta name="description" content="Bstern's site" />
      <link rel="icon" type="image/png" href={favicon} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
    </Head>
  )
}

export default head;
