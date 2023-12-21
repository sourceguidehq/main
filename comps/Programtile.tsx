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
  } from "@/components/ui/card"

type Props = {
    title:string,
    body:string,
    url:string,
    stipend:"yes"|"no"
    
}

export default function Programtile({title,body,url,stipend}: Props) {
  return (
    <Card className='w-[450px] p-1'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{body}</CardDescription>
  </CardHeader>
  <CardContent>
  <a href={url} target="_blank" rel="noopener noreferrer"><Button>
      Link
    </Button></a>
    <br></br>
    <Badge variant="outline">{stipend}</Badge>
  </CardContent>
  </Card>

  )
}