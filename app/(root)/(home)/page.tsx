import { UserButton } from "@clerk/nextjs"

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}

export default Home