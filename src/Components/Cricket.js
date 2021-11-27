import React from 'react'
import CricketCard from './CricketCard'
import { useEffect,useState } from 'react'
import Loader from './Loader'
function Cricket() {
 useEffect(()=>Show(),[])

 const [Articles, setArticles] = useState([])
 const [Loading, setLoading] = useState(false)


 let Show = () =>{
     fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a1d09efabb8d40e7822d787a7f10e9cc')
     .then(res=>res.json())
     .then(data=>setArticles(data.articles))
     .then(()=>setLoading(true))
     .then(data=>console.log(data))
 }
    return (
        <div>
            { Loading ? <CricketCard articles={Articles}/> : <Loader/>}
            
        </div>
    )
}

export default Cricket
