"use client"
import { GrAdd } from 'react-icons/gr'
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import DatePicker from './date-picker'
import { useLogStore } from '@/store'
import { useToast } from "@/components/ui/use-toast"
import dayjs from 'dayjs'
const LogAdd = () => {
    const { toast } = useToast()
    const log = useLogStore(state => state.log)
    const setLog = useLogStore(state => state.setLog)
    const setLogs = useLogStore(state => state.setLogs)

    const validateLog = () => {
        if (log.date && log.hour !== 0 && log.note) {
            return true
        } else {
            throw new Error('Please fill in all fields')
        }
    }
    const closeDialog = () => {
        const btn = document?.getElementById('close-btn')
        btn?.click();
    }
    const submitLog = () => {
        try {
            validateLog()
            setLogs(
                log,
                dayjs(log.date).format('YYYY-MM-DD')
            )
            setLog({
                date: new Date(),
                hour: 0,
                note: ''
            })

            toast({
                title: "Successfully create log",
                description: `${log.hour} hours on ${dayjs(log.date).format('YYYY-MM-DD')} with note: ${log.note}`,
            })
            closeDialog()
        } catch (e: any) {
            toast({
                variant: "destructive",
                title: "Fail to create log",
                description: e.message,
            })
        }
    }
    return (
        <div className='w-full flex justify-center my-12 font-mono'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='w-1/4 border border-dashed border-slate-600'>
                        <GrAdd />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create a time log</DialogTitle>
                        <DialogDescription>
                            Fill in the form below to add a new time log.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Date
                            </Label>
                            <DatePicker />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="hours" className="text-right">
                                Hours
                            </Label>
                            <Input id="hours" type='number' placeholder='2' min={0} max={24} className="col-span-3"
                                onChange={(e) => {
                                    setLog({ ...log, hour: parseInt(e.target.value) })
                                }}
                                value={log.hour}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="note" className="text-right">
                                Note
                            </Label>
                            <Input id="note" placeholder='Type your note' className="col-span-3"
                                onChange={(e) => {
                                    setLog({ ...log, note: e.target.value })
                                }
                                }
                                value={log.note}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={submitLog}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default LogAdd