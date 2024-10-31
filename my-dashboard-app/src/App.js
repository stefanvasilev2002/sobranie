import React, { useState } from 'react';
import { Home, Menu, Users, Calendar, Building, Briefcase, Globe, MessageSquare, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card/Card";
import ChatbotPage from "./components/ChatBot";

const DashboardLayout = ({ children, onNavigate, currentPage }) => {
    const NavLink = ({ page, icon, children }) => (
        <button
            onClick={() => onNavigate(page)}
            className={`flex items-center px-4 py-2 w-full text-left ${currentPage === page ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100'}`}
        >
            {icon}
            <span className="ml-3">{children}</span>
        </button>
    );


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="p-4 flex flex-col items-center">
                    <img
                        width={"100px"}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462536256_1497636651628373_4534611217250511881_n.png?stp=dst-png_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3mzMF16kU6cQ7kNvgEctWYr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=AkHBO-9nLo9JddVZX2PObMN&oh=03_Q7cD1QF8hPYGxE9rBtOs8epokaJtQcStHqCPryYwiv59452uYg&oe=674B4DEE"
                        alt=""
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mt-2" style={{fontSize:'25px'}}>
                        <span style={{fontWeight:'400'}}>Собра</span>
                        <span style={{color:'#ba2d2f', fontWeight:"700"}}>ние</span>
                    </h1>
                </div>

                <nav className="mt-4">
                    <NavLink page="home" icon={<Home className="w-5 h-5"/>}>
                        Дома
                    </NavLink>
                    <NavLink page="members" icon={<Users className="w-5 h-5"/>}>
                        Пратеници
                    </NavLink>
                    <NavLink page="assemblies" icon={<Building className="w-5 h-5"/>}>
                        Парламентарни Состави
                    </NavLink>
                    <NavLink page="working-bodies" icon={<Briefcase className="w-5 h-5"/>}>
                        Работни Тела
                    </NavLink>
                    <NavLink page="cooperation" icon={<Globe className="w-5 h-5"/>}>
                        Групи за Соработка
                    </NavLink>
                    <NavLink page="sessions" icon={<MessageSquare className="w-5 h-5"/>}>
                        Седници
                    </NavLink>
                    <NavLink page="chatbot" icon={<MessageCircle className="w-5 h-5"/>}>
                        Чат со собранието
                    </NavLink>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
};
const WorkingBodiesPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Работни Тела</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Листа на Работни Тела</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon...</p>
                </CardContent>
            </Card>
        </div>
    );
};

const CooperationGroupsPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Групи за Соработка</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Листа на Групи за Соработка</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon...</p>
                </CardContent>
            </Card>
        </div>
    );
};
const StatCard = ({ title, value, description, icon }) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <CardTitle>{title}</CardTitle>
                <div className="text-blue-500">
                    {icon}
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">{value}</p>
            <CardDescription>{description}</CardDescription>
        </CardContent>
    </Card>
);

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Добредојдовте во Собраниски Портал
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div className="w-full">
                            Влезете во Порталот
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

const HomePage = ({ onNavigate }) => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Добредојдовте во Собраниски Портал</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    title="Пратеници"
                    value="120"
                    description="Вкупно активни пратеници"
                    icon={<Users className="w-8 h-8" />}
                    onClick={() => onNavigate('members')}
                />
                <StatCard
                    title="Седници"
                    value="45"
                    description="Седници оваа година"
                    icon={<MessageSquare className="w-8 h-8" />}
                    onClick={() => onNavigate('sessions')}
                />
                <StatCard
                    title="Работни Тела"
                    value="21"
                    description="Активни работни тела"
                    icon={<Briefcase className="w-8 h-8" />}
                    onClick={() => onNavigate('working-bodies')}
                />
            </div>
            <div>
                <iframe
                        src="https://e-nabavki.gov.mk/InstitutionGridData.aspx#/ciAnnouncementPlansGrid/edb4401d-2e07-4633-85be-3f6424b504e5"></iframe>
            </div>
        </div>
    );
};

const MembersPage = () => {
    const members = [
        {id: 1, ime: "Александар", prezime: "Николовски", datumNaRaganje: "1980-05-15"},
        { id: 2, ime: "Марија", prezime: "Петковска", datumNaRaganje: "1975-08-22" },
        { id: 3, ime: "Стефан", prezime: "Димитриевски", datumNaRaganje: "1982-03-10" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Пратеници</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Листа на Пратеници</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Име
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Презиме
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Датум на раѓање
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {members.map((member) => (
                                <tr key={member.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.ime}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.prezime}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.datumNaRaganje}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const SessionsPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Седници</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Листа на Седници</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon...</p>
                </CardContent>
            </Card>
        </div>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('landing');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
            case 'members':
                return <MembersPage />;
            case 'assemblies':
                return <WorkingBodiesPage />;
            case 'working-bodies':
                return <WorkingBodiesPage />;
            case 'cooperation':
                return <CooperationGroupsPage />;
            case 'sessions':
                return <SessionsPage />;
            case 'chatbot':
                return <ChatbotPage />;
            case 'landing':
            default:
                return <LandingPage />;
        }
    };

    return (
        <DashboardLayout onNavigate={setCurrentPage} currentPage={currentPage}>
            {renderPage()}
        </DashboardLayout>
    );
};

export default App;