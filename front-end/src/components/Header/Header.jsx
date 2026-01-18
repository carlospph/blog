import Brand from "../Brand/Brand"
import MenuComputer from "../MenuComputer/MenuComputer"
import SearchBar from "../SearchBar/SearchBar"

const Header = () => {
    return (
        <header className="bg-black pt-3 fixed border-b border-gray-700 w-full z-10">
            <div className="max-w-7xl mx-auto px-2">
                <div className="md:grid md:grid-cols-2">
                    <div className="flex items-center gap-3 mt-3">
                        <Brand />
                    </div>
                    <SearchBar />
                    <div className="my-3">
                        <MenuComputer />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
