import React from 'react';
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type Props = {
    title:string,
    body:string,
    organization:string,
    language:string,
    label?:string,
    date:string
}

export default function Tile({title,body,organization,language,label,date}: Props) {
  return (
    <Card className='w-[450px] p-1'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{body}</CardDescription>
  </CardHeader>
  <CardContent>
    <Badge>{language}</Badge>
    <br></br>
    <Badge variant="outline">{organization}</Badge>
  </CardContent>
  <CardFooter>
    <p>{date}</p>
  </CardFooter>
</Card>

  )
}