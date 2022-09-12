import React, { ReactNode } from "react"

export type Photo = {
  name: string
  url: string 
  id?: string
  children?: ReactNode
}