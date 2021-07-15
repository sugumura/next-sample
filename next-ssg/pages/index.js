import Image from 'next/image'
import Link from 'next/link'

function HomePage({ dog }) {
  console.log("HomePage", { ...dog })
  return <>
    <main>
      <h1>SSG HomePage</h1>
      <Image src={dog.message} alt="dog" width="300" height="300" />
      <div>
        <Link href="/about">
            <a>About</a>
        </Link>
      </div>
    </main>
  </>
}

export async function getStaticProps() {
  console.log("HomePage / getStaticProps")
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

export default HomePage
