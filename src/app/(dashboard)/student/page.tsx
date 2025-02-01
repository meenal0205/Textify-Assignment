import Announcements from "@/components/Announcements";

import EventCalendar from "@/components/EventCalendar";
import StudentListPage from "@/components/StudentList";

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">

            <div className="w-full xl:w-2/3 shadow-lg rounded-lg">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Student List </h1>

                    <StudentListPage />



                </div>
            </div>

            <div className="w-full xl:w-1/3 flex flex-col gap-8 rounded-lg ">
                <div className="shadow-lg rounded-lg">
                    <EventCalendar />
                </div>
                <div className="shadow-lg rounded-lg">
                    <Announcements />
                </div>


            </div>
        </div>
    );
};

export default StudentPage;