import React from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/pcard"

type Props = {
    title:string,
    body:string,
    url:string,
    stipend:"yes"|"no"
    
}

export default function Programtile({title,body,url,stipend}: Props) {
  return (
  

    <Card className='w-[350px] sm:w-[450px] h-[250px] mx-auto my-2 p-1 dark:bg-[#2A2C31] shadow-xl'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{body}</CardDescription>
  </CardHeader>
  <CardFooter className='sm:mt-3 sm:mt-6 flex flex-col justify-start items-start gap-2'>

    <a href={url} className='block' target="_blank" rel="noopener noreferrer">
      <Button>
      Link
     </Button>
     </a>

    <Badge variant="outline">Stipend:{stipend}</Badge>

  </CardFooter>
  </Card>



  )
}