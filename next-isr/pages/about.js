import Image from 'next/image'

function AboutPage({ dog, current }) {
  console.log("ISR AboutPage", { ...dog })
  return <>
    <main>
      <h1>SSG AboutPage</h1>
      <Image src={dog.message} alt="dog" width="300" height="300" />
      <div>Generated at {current}</div>
    </main>
  </>
}

export async function getStaticProps() {
  console.log("ISR AboutPage / getStaticProps")
  // Call an external API endpoint to get posts
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await res.json()
  const date = new Date()
  const current = date.toLocaleString()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dog,
      current,
    },
    revalidate: 10,
  }
}

export default AboutPage
