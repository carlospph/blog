import MenuComputer from "../MenuComputer/MenuComputer"
import SearchBar from "../SearchBar/SearchBar"

const Header = () => {
    return (
        <header className="bg-black pt-3">
            <div className="max-w-7xl mx-auto">
                <div className="shadow-lg py-1 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <p className="border bg-blue-300 rounded pr-5 py-2">
                            <i className="fa-solid fa-desktop px-3 text-white text-2xl block"></i>
                        </p>
                        <p><span className="text-white font-semibold text-3xl">Info</span><span className="text-blue-200 font-semibold text-3xl">Basic</span></p>
                    </div>
                    <SearchBar />
                    <MenuComputer />
                </div>
            </div>
        </header>
    )
}

export default Header
