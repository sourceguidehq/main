import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

       <Card>
       <CardContent>
       <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
         Hello shadcn
    </h2>
      </CardContent>
       </Card>
   
    </main>
  )
}
