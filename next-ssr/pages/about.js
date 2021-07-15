import Image from 'next/image'

function AboutPage({ dog }) {
  console.log("SSR AboutPage", { ...dog })
  return <>
    <main>
      <h1>SSG AboutPage</h1>
      <Image src={dog.message} alt="dog" width="300" height="300" />
    </main>
  </>
}

export async function getServerSideProps() {
  console.log("SSR AboutPage / getServerSideProps")
  // Call an external API endpoint to get posts
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dog,
    },
  }
}

export default AboutPage
