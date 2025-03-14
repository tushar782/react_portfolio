import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Wave Animation */}
            <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-wave"></div>
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/917522994318?text=Hello Tushar!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition"
                title="Chat with us on WhatsApp"
            >
                <FaWhatsapp className="text-2xl md:text-3xl" />
            </a>
        </div>
    );
};

export default FloatingWhatsApp;
