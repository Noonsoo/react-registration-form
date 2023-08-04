import  {createContext, useState, useEffect} from "react"
import api from "../api/posts"

const DataContext = createContext({})

export const DataProvider = ({children})    => {
    const [posts, setPosts] = useState([])
    const[searchResults, setSearchResults] = useState([])
    const [search, setSearch] =useState("")
    
useEffect(() => {
    const fetchPosts = async () => {
     try {
        const response = await api.get("/posts")
        setPosts(response.data)
     } catch (error) {
      // response not in the 200 range
      if(error.response) {
        console.log(error.response.data)
      } else {
        console.log(`Error: ${error.message}`)
      }
        
     }
    }
    fetchPosts()
}, [])

useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
      ((post.title).toLowerCase()).includes(search.toLowerCase()))
  console.log(filteredResults)
      setSearchResults(filteredResults.reverse())
  
    },[posts,search])


    return (
        <DataContext.Provider value={{
           posts,setPosts,search,setSearch,searchResults,setSearchResults
        }}>
             {children}
            </DataContext.Provider>
    )
}

export default DataContext