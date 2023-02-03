import {useEffect} from "react"
import {useCounterStore} from "./store/counterStore"
import shallow from "zustand/shallow"

const App = () => {

  useEffect(() => {
    getPosts()
  }, [])
  

  const {count, posts}= useCounterStore((state) => ({
    count: state.count,
    posts: state.posts
  }), shallow)

  const { increment, getPosts} = useCounterStore();


  return (
    <div>
      <h1>
        Count: {count}
        <button
        onClick={()=> {increment(10)}}
        >Increment</button>

        <hr/>

        {JSON.stringify(posts)}
      </h1>
    </div>
  )
}

export default App