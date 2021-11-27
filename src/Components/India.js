import React from 'react'
import NewCard from './NewCard'
import { useEffect,useState } from 'react'
import Loader from './Loader'

function India() {
 useEffect(()=>Show(),[])

 const [Articles, setArticles] = useState([])
  const [Loading, setLoading] = useState(false)

 let Show = () =>{
     fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a1d09efabb8d40e7822d787a7f10e9cc')
     .then(res=>res.json())
     .then(data=>setArticles(data.articles))
     .then(()=>setLoading(true))
     .catch(err=>console.log(err))
 }
    return (
        <div>
            { Loading ? <NewCard articles={Articles}/> : <Loader/>}
        </div>
    )
}

export default India
