import Head from "next/head";
import Image from "next/image";

export default function DramaCourse() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Penguen Sanat | Tiyatra & Drama</title>
            </Head>
            {/* Hero Section */}
            <div className="hero pt-20 h-screen relative">
                <div className="hero-overlay bg-[#FFB74D]"></div>
                <div className="hero-content flex flex-col text-center text-black relative z-10">
                    <img src="/course-cards/1.png" className="h-80 w-auto" alt="Drama Course" />
                    <p className="mt-2 max-w-screen-md text-xl">
                        Sahne sanatlarının büyülü dünyasına adım at! Profesyonel eğitmenlerimizle
                        oyunculuk, doğaçlama ve sahne becerilerini geliştir. Eğlenceli bir ortamda
                        yeteneklerini keşfet ve özgüven kazan!
                    </p>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Ne Öğreneceksiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Temel Sahne Becerileri</h3>
                            <p className="text-gray-600">
                                Tiyatroda temel kuralları öğrenin, sahne duruşu ve ses kullanımını keşfedin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Doğaçlama Teknikleri</h3>
                            <p className="text-gray-600">
                                Sahne üzerinde anında yaratıcı çözümler ve doğaçlama yöntemleri geliştirin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Karakter Geliştirme</h3>
                            <p className="text-gray-600">
                                Farklı karakterlere bürünme tekniklerini öğrenerek oyunculuk becerilerinizi
                                ileri taşıyın.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-4xl">Sahneye Çık!</h2>
                    <p className="dark:text-gray-600">Tiyatronun büyüsünü yaşayın ve yeteneklerinizi sergileyin.</p>
                </div>
                <div className="container text-center mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-orange-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Temeller</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Tiyatro ve drama kuralları.</p>
                            <p>Sahneye uyum sağlamanın püf noktaları.</p>
                            <p>Sahne korkusunu yenme teknikleri.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-orange-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Doğaçlama</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Anında yaratıcı çözümler bulma.</p>
                            <p>Sahne enerjisini kullanma teknikleri.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-orange-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Karakter Geliştirme</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Farklı karakterlere bürünme teknikleri.</p>
                            <p>Oyunculuk becerilerinin geliştirilmesi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Tiyatro & Drama Dersliklerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/theater.png"
                                alt="Tiyatro Sahnesi"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Tiyatro Sahnesi</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/theater-2.png"
                                alt="Drama Çalışma Alanı"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Drama Çalışma Alanı</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/drama-room.png"
                                alt="Drama Odası"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Drama Odası</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-12 text-white bg-[#E65100] text-center">
                <h2 className="text-4xl mb-4">Şimdi Kayıt Ol!</h2>
                <p className="text-lg mb-6">Kendi hikayenizi sahneye taşıyın ve tiyatro dünyasına adım atın.</p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#E65100] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>
            </section>
        </div>
    );
}