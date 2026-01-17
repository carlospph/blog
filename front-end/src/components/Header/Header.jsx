import Brand from "../Brand/Brand"
import MenuComputer from "../MenuComputer/MenuComputer"
import SearchBar from "../SearchBar/SearchBar"

const Header = () => {
    return (
        <header className="bg-black pt-3 fixed border-b border-gray-700 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="shadow-lg py-1 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Brand />
                    </div>
                    <SearchBar />
                    <MenuComputer />
                </div>
            </div>
        </header>
    )
}

export default Header
