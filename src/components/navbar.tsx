export default function Navbar() {
    return (
        <>
            {/* Notification Bar */}
            <div className="navbar pb-6 bg-green-400 text-white fixed top-0 left-0 right-0 z-[11] h-16 flex justify-center items-center">
                <p className="text-center text-black text-sm font-medium">
                    Daha fazlasını mı merak ediyorsun?
                    <a href="http://free.penguensanat.com/" target="_blank" className="inline-block underline ml-1">Ücretsiz Deneme Dersi!</a>
                </p>
            </div>


            {/* Main Navbar */}
            <div className="navbar  bg-white/80 backdrop-blur-md fixed top-12 left-0 right-0 z-[12] shadow-lg">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-600 hover:text-gray-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white/90 rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
                            <li><a href="/about" className="text-gray-600 hover:text-gray-800">Hakkımızda</a></li>
                            <li>
                                <div className="text-gray-600  ">Kurslar</div>
                                <ul className="p-2">
                                    <li><a href="/courses/music" className="text-gray-600 hover:text-gray-800">Müzik</a></li>
                                    <li><a href="/courses/chess" className="text-gray-600 hover:text-gray-800">Satranç</a></li>
                                    <li><a href="/courses/paint" className="text-gray-600 hover:text-gray-800">Resim</a></li>
                                    <li><a href="/courses/drama" className="text-gray-600 hover:text-gray-800">Tiyatro ve Drama</a></li>
                                    <li><a href="/courses/robotics" className="text-gray-600 hover:text-gray-800">Robotik Kodlama</a></li>
                                </ul>
                            </li>
                            <li><a href="/highlights" className="text-gray-600 hover:text-gray-800">Öne Çıkanlar</a></li>
                            <li><a href="/market" className="text-gray-600 hover:text-gray-800">Mağaza</a></li>
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl text-gray-700 hover:text-gray-900">
                        <img src="/penguensanat.png" alt="Penguen Sanat Logo" className="h-6" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        <li><a href="/about" className="text-gray-600 hover:text-gray-800">Hakkımızda</a></li>
                        <li>
                            <details>
                                <summary className="text-gray-600   hover:text-gray-800">Kurslar</summary>
                                <ul className="p-2 shadow-md bg-white/90">
                                    <li><a href="/courses/music" className="text-gray-600 hover:text-gray-800">Müzik</a></li>
                                    <li><a href="/courses/chess" className="text-gray-600 hover:text-gray-800">Satranç</a></li>
                                    <li><a href="/courses/paint" className="text-gray-600 hover:text-gray-800">Resim</a></li>
                                    <li><a href="/courses/drama" className="text-gray-600 hover:text-gray-800">Tiyatro ve Drama</a></li>
                                    <li><a href="/courses/robotics" className="text-gray-600 hover:text-gray-800">Robotik Kodlama</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="/highlights" className="text-gray-600 hover:text-gray-800">Öne Çıkanlar</a></li>
                        <li><a href="/market" className="text-gray-600 hover:text-gray-800">Mağaza</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a href="http://register.penguensanat.com" className="btn text-white bg-orange-400 border-none hover:bg-orange-600  ">Kayıt Ol</a>
                </div>
            </div>
        </>
    )
}

