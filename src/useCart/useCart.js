import { useEffect, useState } from "react"
import { getStoreCard } from "../utilities/fakedb"

const useCart = (prodects) => {
      
      const [cart , SetCart] = useState([])


      useEffect(() => {
            const storeCart = getStoreCard()
      const saveCart = []

      for(const id in storeCart){
         const addedCart = prodects.find(prodect => prodect.id === id)
         if(addedCart){
               const quantity = storeCart[id]
               addedCart.quantity = quantity
               saveCart.push(addedCart)
         }
         SetCart(saveCart)
      }
      
     
      } , [prodects])
      return [cart , SetCart]
}
export default useCart;