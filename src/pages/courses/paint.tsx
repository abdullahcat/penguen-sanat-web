import Head from "next/head";
import Image from "next/image";

export default function PaintCourse() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Penguen Sanat | Resim</title>
            </Head>
            {/* Hero Section */}
            <div className="hero pt-20 h-screen relative">
                <div className="hero-overlay bg-[#FFF9C4]"></div>
                <div className="hero-content flex flex-col text-center text-black [#FBC02D] relative z-10">
                    <img src="/course-cards/5.png" className="h-80 w-auto" alt="Paint Course" />
                    <p className="mt-2 max-w-screen-md text-xl">
                        Hayal gücünüzü renklere dökün! Profesyonel eğitmenlerimizle yağlı boya, suluboya ve karakalem gibi farklı teknikleri keşfedin. Kendi sanat eserlerinizi yaratma keyfini yaşayın!
                    </p>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Ne Öğreneceksiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Temel Çizim Teknikleri</h3>
                            <p className="text-gray-600">
                                Çizim tekniklerini öğrenerek perspektif, ışık ve gölge kullanımı konusunda uzmanlaşın.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Renk Karıştırma</h3>
                            <p className="text-gray-600">
                                Farklı boya türlerini keşfedin ve renk karıştırma teknikleriyle eşsiz tonlar yaratın.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Sanat Kompozisyonu</h3>
                            <p className="text-gray-600">
                                Kompozisyonun temel kurallarını öğrenerek sanat eserlerinize estetik bir dokunuş katın.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-4xl">Sanatınızı Keşfedin!</h2>
                    <p className="dark:text-gray-600">Kendi tarzınızı bulun ve sanat dünyasında yerinizi alın.</p>
                </div>
                <div className="container text-center mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#FBC02D]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Temeller</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Çizim ve boyama kuralları.</p>
                            <p>Perspektif ve oranlar.</p>
                            <p>Işık ve gölge teknikleri.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#FBC02D]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Renkler</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Renk teorisi ve palet oluşturma.</p>
                            <p>Renk kombinasyonlarıyla yaratıcı çalışmalar.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#FBC02D]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Kompozisyon</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Estetik ve simetri kullanımı.</p>
                            <p>Sanatınıza derinlik katma yöntemleri.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Sanat Atölyelerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/paint-studio.png"
                                alt="Sanat Atölyesi"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Sanat Atölyesi</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-12 text-white bg-[#FBC02D] text-center">
                <h2 className="text-4xl mb-4">Şimdi Kayıt Ol!</h2>
                <p className="text-lg mb-6">Hayal gücünüzü keşfedin ve benzersiz sanat eserleri yaratın.</p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#FBC02D] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>
            </section>
        </div>
    );
}
