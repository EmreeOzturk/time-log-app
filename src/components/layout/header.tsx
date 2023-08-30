import { Button } from "../ui/button"
import { IoTimer } from 'react-icons/io5'
const Header = () => {
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
            <div>
                <Button className="w-28" variant="default">Logout</Button>
            </div>
        </header>
    )
}

export default Header   