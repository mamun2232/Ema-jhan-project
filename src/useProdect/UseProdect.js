import { useEffect, useState } from "react"

const useProdect = () => {
      const [prodects , setProdect] = useState([])
      useEffect(() =>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProdect(data))
      })
 
      return [prodects , setProdect]
      
}

export default useProdect;