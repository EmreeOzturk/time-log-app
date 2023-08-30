"use client"
import React, { memo } from 'react'
import useDateHelpers from '@/hooks/useDateHelpers'
import { cn } from '@/lib/utils'
import { AiOutlineArrowRight as ArrowRight, AiOutlineArrowLeft as ArrowLeft } from 'react-icons/ai'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
const LogCalendar = () => {
    const { getDaysInMonth } = useDateHelpers()
    console.log(getDaysInMonth())
    const hours = [1, 2, 3, 4, 5, 6, 7, 8]

    const getColor = (hour: number) => {
        if (hour < 3) {
            return 'bg-green-300'
        } else if (hour < 6) {
            return 'bg-green-500'
        } else if (hour < 9) {
            return 'bg-green-700'
        } else {
            return 'bg-green-900'
        }
    }

    return (
        <div className='flex justify-center items-center gap-3 rounded-md border border-slate-600 p-6 border-dashed'>
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger  >
                        <ArrowLeft className='w-6 h-6 p-1 text-slate-500 cursor-pointer hover:bg-slate-600 transition-all hover:text-white duration-600 rounded-full' />
                    </TooltipTrigger>
                    <TooltipContent className='font-mono'>
                        Previous Month
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className='flex flex-wrap justify-center items-center gap-3'>
                {
                    getDaysInMonth().map((day, index) => {
                        return (
                            <TooltipProvider key={index} delayDuration={200}>
                                <Tooltip>
                                    <TooltipTrigger className={
                                        cn(
                                            "w-6 h-6 border border-slate-800 rounded-md",
                                            getColor(hours[index % hours.length])
                                        )
                                    }></TooltipTrigger>
                                    <TooltipContent>
                                        {hours[index % hours.length]} hours on {day}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    }
                    )
                }
            </div>
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger  >
                        <ArrowRight className='w-6 h-6 p-1 text-slate-500 cursor-pointer hover:bg-slate-600 transition-all hover:text-white duration-600 rounded-full' />
                    </TooltipTrigger>
                    <TooltipContent className='font-mono'>
                        Next Month
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default memo(LogCalendar)