import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const handleClick = () => {
        console.log('hello') 
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    const [name, setName] = useState('mario')
    const myClick = () => {
        setName('luigi')
    }

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch(['http://localhost:8000/blogs'])
    //        .then(res => {
    //           if(!res.ok){
    //             throw Error('could not fetch data')
    //           }
    //           return res.json()
    //        }) 
    //        .then(data => {
    //           setBlogs(data)
    //           setIsPending(false)
    //           setError(null)
    //        })
    //        .catch(err => {
    //           setIsPending(false)
    //           setError(err.message)
              
    //        })
    //     },1000)   
    // }, [])

    // const title = 'another paragraph'
    // const likes = 50
    // const list = [1,2,3]
    // const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"
    return ( 
        <div className="home">
            <div className="Content">   

                    
               {/* <h1>React Home</h1>  
               <p>This is a paragraph</p>
               <button onClick={handleClick}>Click me</button>
               <button onClick={() => handleClickAgain('tabish')}>Click me again</button>
               <button onClick={() => {console.log('hello there')}}>click once again</button>
               <button onClick={() => {handleClick()}}>click once again</button> */}
               

               {/* setState */}
               {/* <p>{name} is 25 years old</p>
               <button onClick={myClick}>Click here now</button> */}

               

               {/* {blogs.map((blog) => (
                  <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                  </div>

               ))}
                */}
                { error && <div>{ error }</div> }
                { isPending && <div>loading.....</div>}
                { blogs && <BlogList blogs={blogs} title= "all blogs" ></BlogList>  }

                
               
               
               
        </div>
        {/* <div className="vis">
            <p> {title} </p>
            <p> liked {likes} times </p>
            <p> list is {list} </p>
            <p> {'a string'} </p>
            <p> {[1,2,3]} </p>
            <p> {500}</p>
            <a href={link}> Click Link</a>

        </div> */}
        </div>
    );
}
 
export default Home;