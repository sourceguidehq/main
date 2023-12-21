import React from 'react';
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import ReactHtmlParser from 'react-html-parser';
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




      // const new_body = (truncateText(body,10))

      function truncateText(text, maxLength) {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
      }
      const new_body = truncateText(body,250);

  return (
    <Card className='w-[450px] p-1'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription className='text-clip'>{new_body}</CardDescription>
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