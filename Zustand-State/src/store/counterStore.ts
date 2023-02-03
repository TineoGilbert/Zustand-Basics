import create from "zustand"

interface Post{
    id: number,
    title: string,
    body: string
}


interface CounterState{
    count: number
    increment: (value: number) => void
    posts: Post[],
    getPosts: () => Promise<void>
}

export const useCounterStore = create<CounterState>((set) =>({
    count: 5,
    posts: [],
    increment: (value: number) => set(state => ({
        count: state.count + value
    })),
    getPosts: async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()

        set(state => ({
            ...state,
            posts
        }))
        console.log(posts)
    }
}))