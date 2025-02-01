"use client"

import { redirect } from "next/dist/server/api-utils"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Homepage = () => {
  useEffect(() => {


    return () => {
      router.push("/home")
    }
  }, [])
  const router = useRouter();


  return (
    <div className=''></div>
  )
}

export default Homepage