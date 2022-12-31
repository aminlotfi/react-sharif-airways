import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";
const MainHeader = () => {
    return (
        <header className="bg-gray-700 p-8 flex w-full items-center justify-between">
            <div className="flex items-center max-w-[1400px] mx-auto w-full">
                <div className="flex items-center justify-start w-full">
                    <Link to="/">
                        <img className="w-[100px] h-[55px]" src={logo} alt="Logo" />
                    </Link>
                    <nav className="items-center justify-start mr-32 hidden md:flex">
                        <Link to="/" className="text-[15px] text-white mr-24">خانه</Link>
                        <Link to="/" className="text-[15px] text-white mr-24">بلیط</Link>
                        <Link to="/about" className="text-[15px] text-white mr-24">درباره ما</Link>
                        <Link to="/contact" className="text-[15px] text-white mr-24">تماس با ما</Link>
                    </nav>
                </div>
                <div className="flex items-center justify-start">
                    <Link to="/login" className="text-[15px] text-white mr-24">ورود</Link>
                    <Link to="/signup" className="py-2 px-4 rounded bg-primary-light hover:bg-primary-dark text-black text-[15px] mr-24">ثبت‌نام</Link>
                </div>
            </div>
        </header>
    )
}

export default MainHeader