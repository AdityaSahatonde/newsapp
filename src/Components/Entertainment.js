import React from 'react'

import { useEffect,useState } from 'react'
import EntertainmentCard from './EntertainmentCard'
import Loader from './Loader'
function Entertainment() {
 useEffect(()=>Show(),[])

 const [Articles, setArticles] = useState([])
 const [Loading, setLoading] = useState(false)

 let Show = () =>{
     fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a1d09efabb8d40e7822d787a7f10e9cc')
     .then(res=>res.json())
     .then(data=>setArticles(data.articles))
     .then(()=>setLoading(true))
     .catch(err=>console.log(err))
 }
    return (
        <div>
            { Loading ? <EntertainmentCard articles={Articles}/> : <Loader/> }
        </div>
    )
}

export default Entertainment
