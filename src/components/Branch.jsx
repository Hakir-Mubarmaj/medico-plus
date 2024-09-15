import React from 'react';

const Branch = () => {
    return (
        <div
        className="bg-gray-100 py-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Left Side: Branch Details */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-teal-700 text-3xl font-bold mb-4">আমাদের শাখা</h2>
                    <p className="text-2xl text-red-700 mb-2">মেডিকো প্লাস</p>
                    <p className="text-xl text-gray-700 mb-2">অর্কিড বিল্ডিং, টেলিটক কাস্টমার কেয়ার সংলগ্ন,</p>
                    <p className="text-xl text-gray-700 mb-2">বটতলা, বগুরা রোড,</p>
                    <p className="text-xl text-gray-700 mb-2">বরিশাল সদর, বরিশাল।</p>
                    <p className="text-xl text-gray-700 mb-2">পোস্ট কোড: ৮২০০</p>
                    <p className="text-xl text-gray-700 mb-2">ইমেইল: <a href="mailto:medicoplus103@gmail.com">medicoplus103@gmail.com</a></p>
                    <p className="text-xl text-gray-700 mb-6">মোবাইল: 01787-457944</p>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        যোগাযোগ করুন
                    </button>
                </div>

                {/* Right Side: Google Map */}
                <div className="md:w-1/2">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.719384566514!2d90.36213797587467!3d22.70148792823299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375535216288ca5d%3A0x587be3d78e9c306a!2sMedico%20Plus!5e0!3m2!1sen!2sbd!4v1726429750408!5m2!1sen!2sbd"
                        width="100%" 
                        height="420" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Branch;
