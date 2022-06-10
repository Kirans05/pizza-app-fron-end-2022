import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import App from "../App"
export const MainContext = createContext()


const Context = () => {

  const [user,setuser] = useState({})
  const [tocken,settocken] = useState("")
  const [cartItem,setcartItem] = useState([])
  const [selectedProduct, setselectedProduct] = useState("")
  const [address, setAddress] = useState("")
  const [varient, setvarient] = useState("");
  const [selectedPizza, setselectedPizza] = useState("")
  const [fetchedUsersList, setfetchedUsersList] = useState([])


    

    useEffect(()=>{

        let userlist = JSON.parse(localStorage.getItem("user"))
        setuser({...user,...userlist})
        settocken(localStorage.getItem("tocken"))
    },[])

    return (
        <>
        <MainContext.Provider value={{user, tocken, cartItem, setcartItem, selectedProduct, setselectedProduct, address, setAddress, varient, setvarient, selectedPizza, setselectedPizza, fetchedUsersList, setfetchedUsersList, setuser}}>
            <App />
        </MainContext.Provider>
        </>
    )
}

 
export default Context