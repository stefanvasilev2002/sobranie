import { Card, CardContent, CardHeader, CardTitle } from "./ui/card/Card";
import { useState } from "react";
import './Chatbot.css'; // Assuming you will create a CSS file for styles

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const predefinedResponses = {
        "Како можам да ви помогнам?": "Ве молам, поставете ми прашање!",
        "Кој е актуелниот состав на парламентот?": "Актуелниот состав на парламентот вклучува 120 пратеници.",
        "Кога се следните избори?": "Следните избори ќе се одржат во 2024 година.",
        "Што е Собранието?": "Собранието е највисокото законодавно тело во нашата земја.",
        "Кој е актуелниот претседател на Собранието?": "Актуелниот претседател на Собранието е Талат Џафери.",
        "Која е улогата на пратениците?": "Пратениците се избрани да претставуваат граѓаните и да донесуваат закони.",
        "Како се избираат пратениците?": "Пратениците се избираат преку општи избори, на кои учествуваат сите граѓани со право на глас.",
        "Која е функцијата на Собранието?": "Собранието донесува закони, контролира работата на извршната власт и претставува интересите на граѓаните.",
        "Колку години трае мандатот на пратениците?": "Мандатот на пратениците трае четири години.",
        "Кои се главните комисии во Собранието?": "Главните комисии во Собранието вклучуваат: Комисија за уставни прашања, Комисија за финансии, Комисија за образување и наука, Комисија за европски прашања и др.",
        "Кога се одржуваат седниците на Собранието?": "Седниците на Собранието се одржуваат редовно, а итни седници можат да се свикаат по потреба.",
        "Како можам да се обратам до Собранието?": "Граѓаните можат да се обратат до Собранието преку писмена комуникација, електронска пошта или преку формулари на веб-страницата на Собранието.",
        "Каде се наоѓа Собранието на Македонија?": "Собранието на Македонија се наоѓа во Скопје, на улицата 'Димитар Влахов'."
    };

    const handleSendMessage = () => {
        if (!input) return;

        // Add user message
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);

        // Get response based on input
        const response = predefinedResponses[input] || "Извинете, не знам одговор на тоа.";

        // Add bot response after a delay
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: response }]);
        }, 500); // 500 ms delay

        // Clear input
        setInput('');
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-lg">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.sender === 'user' ? 'message-container-user' : 'message-container-bot'}`}>
                        <div className={`message-content ${msg.sender === 'bot' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>
                            <strong>{msg.sender === 'bot' ? 'Собрание AI:' : 'Вие:'}</strong> {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 border border-gray-300 rounded-lg p-2 shadow-md transition duration-200 focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Внесете прашање..."
                />
                <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md transition duration-200 hover:bg-red-600">Прашај</button>
            </div>
        </div>
    );
};

// Updated ChatbotPage Component
const ChatbotPage = () => {
    return (
        <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-800">Чат со Собранието</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                    <Chatbot />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChatbotPage;
