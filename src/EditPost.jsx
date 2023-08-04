import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect,useContext } from 'react'
import DataContext from './context/DataContext'

function EditPost() { 
  const[editTitle, setEditTitle] = useState("")
  const [editBody, setEditBody] = useState("")
  const {posts, setPosts} = useContext(DataContext)
  
    const {id} = useParams()
    // id coming out of params is a string therefore we convert post,id to a string 
    const post  = posts.find(post => (post.id).toString() == id)

    useEffect(() =>{
       if(post) {
        setEditTitle(post.title)
        setEditBody(post.body)
       }
    },[post, setEditBody, setEditTitle]);

    const handleEdit = async(id) => {
      const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const updatedPost = {id, title: editTitle, datetime, body: editBody}
    try {
      const response = await api.put(`/posts/${id}`,updatedPost)
      setPosts(posts.map(post => post.id == id ? {...response.data} : post))
      setEditBody("")
      setEditTitle("")
      
    } catch (error) {
      console.log(error.message)
    }
    }

  return (
    <main className='NewPost'>
        
          {
            editTitle && <>
             <h2>Edit Post</h2>
            <form  className="newPostForm" onSubmit={e => e.preventDefault()} >
                  <label htmlFor='PostTitle'>
                    Title:
                  </label>
                  <input 
                  id='PostTitle'
                  type="text"
                  required
                   value={editTitle} 
                   onChange={e => setEditTitle(e.target.value)} 
                   />
                   <label htmlFor="PostBody">Post</label>
                   <textarea  
                     id='postBody'
                     required
                     value={editBody}
                     onChange={(e) => setEditBody(e.target.value)} />
                     <button type='submit' onClick={() => handleEdit(post.id) } >Edit</button>
                </form> 
                </> || <> 
            <h2>Post not found</h2>
            <p>Well, thats disappointing</p>
            <p>
              <Link to="/">Go to Homepage</Link>
            </p>
            </>
         } 
    

  </main>
  )
}

export default EditPost