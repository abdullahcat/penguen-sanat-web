import Head from "next/head";
import Image from "next/image";
export default function ChessCourse() {
    return (
        <div className="bg-gray-100  min-h-screen">
            <Head>
                <title>Penguen Sanat | Satranç</title>
            </Head>
            {/* Hero Section */}
            <div
                className="hero pt-20  h-screen relative"
            >
                <div className="hero-overlay bg-[#E1BEE7]     "></div>
                <div className="hero-content flex flex-col   text-center text-black relative z-10">
                    <img src="/course-cards/3.png" className="h-80 w-auto " alt="" />
                    <p className="mt-2 max-w-screen-md text-xl">
                        Profesyonel eğitmenlerimizle satranç sanatında ustalaş. Eğlenceli ve ilgi çekici bir ortamda stratejileri, taktikleri ve eleştirel düşünmeyi öğren!
                    </p>
                </div>
            </div>

            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Ne Öğreneceksiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="  text-2xl mb-2">Satranç Temelleri</h3>
                            <p className="text-gray-600">
                                Satranç kurallarını, temel hamleleri ve başlamanız için gereken temel taktikleri öğrenin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="  text-2xl mb-2">Orta Düzey Stratejiler</h3>
                            <p className="text-gray-600">
                                Açılışlardan sona oyunlara kadar stratejik oyunları derinlemesine keşfedin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="  text-2xl mb-2">İleri Düzey Taktikler</h3>
                            <p className="text-gray-600">
                                Karmaşık stratejileri ustaca uygulamayı ve eleştirel düşünmeyi öğrenin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-4xl  ">Şah-Mat!</h2>
                    <p className="dark:text-gray-600">Satrançta bir adım öne geçin.</p>
                </div>
                <div className="container text-center mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#7B1FA2]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Temel</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Satranç oyununun temel kuralları.</p>
                            <p>Açılış stratejileri ve taktikler.</p>
                            <p>Satrançta başarı için ipuçları.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#7B1FA2]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Strateji</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Başlangıçtan son oyun stratejilerine kadar gelişim.</p>
                            <p>Hamlelerinizi doğru tahmin edin.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#7B1FA2]">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Taktikler</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Derinlemesine düşünme ve zeka geliştirme.</p>
                            <p>Rakiplerinizi alt etmek için ileri düzey hamleler.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white text-black ">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Satranç Dersliklerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">

                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/chess-room.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Satranç Odası</p>
                            </div>
                        </div>
                    </div>



                </div>
            </section >



            {/* Call to Action Section */}
            <section className="py-12 text-white[#E1BEE7]   bg-[#7B1FA2]   text-center">
                <h2 className="text-4xl   mb-4">Şimdi Kayıt Ol!</h2>
                <p className="text-lg mb-6">
                    Satranç kursumuza katıl ve satranç ustası olma serüvenini başlat!
                </p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#7B1FA2] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>

            </section>
        </div>
    );
}
