"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { GrCalendar } from 'react-icons/gr'
import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"
const DatePicker = () => {
    const [date, setDate] = useState<Date>()
    return (
        <Popover >
            <PopoverTrigger asChild className='w-full'>
                <Button
                    variant={"outline"}
                    className={cn(
                        "justify-start text-left font-normal col-span-3",
                        !date && "text-muted-foreground"
                    )}
                >
                    <GrCalendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker