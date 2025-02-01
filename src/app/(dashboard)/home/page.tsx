import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard title="student" value={20} />
                    <UserCard title="teacher" value={40} />
                    <UserCard title="parent" value={30} />
                    <UserCard title="staff" value={30} />
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px] rounded-lg shadow-lg">
                        <CountChart />
                    </div>

                    <div className="w-full lg:w-2/3 h-[450px] rounded-lg shadow-lg">
                        <AttendanceChart />
                    </div>
                </div>

                <div className="w-full h-[500px] rounded-lg shadow-lg">
                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8 ">
                <div className="rounded-lg shadow-lg">
                    <EventCalendar />
                </div>
                <div className="rounded-lg shadow-lg">
                    <Announcements />
                </div>


            </div>
        </div>
    );
};

export default AdminPage;