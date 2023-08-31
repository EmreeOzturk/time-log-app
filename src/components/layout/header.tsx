"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button"
import { IoTimer } from 'react-icons/io5'
import { useRouter, usePathname } from "next/navigation";
const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClientComponentClient();
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <header className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <div className="text-4xl">
                    <IoTimer />
                </div>
                <div className="text-2xl font-bold">
                    <h1>Time Logger</h1>
                </div>
            </div>
            {
                pathname !== '/auth' && (
                    <div>
                        <Button
                            onClick={handleLogout}
                            className="w-28" variant="default">Logout</Button>
                    </div>
                )
            }
        </header>
    )
}

export default Header   