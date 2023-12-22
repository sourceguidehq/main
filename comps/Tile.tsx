import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
    body: string,
    organization: string,
    language: string,
    date: string
}

export default function Tile({ title, body, organization, language, label, date }: Props) {
    // Function to truncate text
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    const new_body = truncateText(body, 50);

    // Function to format the date
    function formatRelativeDate(dateString) {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    }

    const formattedDate = formatRelativeDate(date);

    return (
        <Card className='w-[350px] sm:w-[450px] h-[300px] m-2 p-1'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className='text-clip'>{new_body}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* Make the organization badge stand out */}
                <Badge style={{ fontWeight: 'bold', color: 'red',marginBottom:"5px" }}>{organization}</Badge>
                <br></br>
                
                <Badge variant="outline">{language}</Badge>
            </CardContent>
            <CardFooter>
                <p>{formattedDate}</p>
            </CardFooter>
        </Card>
    );
}
