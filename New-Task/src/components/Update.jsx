import React, { useEffect, useState } from 'react'

function Update(props) {
    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchsignle = async () =>{
            try{
                console.log("heelo")
            }catch(error){
            console.log(error.message)
            }
        }
    })
  return (
    <>
      
    </>
  )
}

export default Update
