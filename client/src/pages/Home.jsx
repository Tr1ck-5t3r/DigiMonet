import APPID from "../components/AppId"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {APPID()}}>Click Here</button>
    </div>
  )
}

export default Home