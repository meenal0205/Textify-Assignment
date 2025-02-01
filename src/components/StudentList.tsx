
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
};

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student ID",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const StudentListPage = () => {



    return (


        <div className="flex flex-col space-y-4 p-4  rounded-lg">
            {/* Table Header */}
            <div className="flex justify-between bg-lamaPurple text-white font-semibold p-3 rounded-md">
                <span className="w-1/5">Name</span>
                <span className="w-1/5">Email</span>
                <span className="w-1/12">Grade</span>
                <span className="w-1/12">Class</span>
                <span className="w-1/4">Address</span>
                <span className="w-1/6">Phone</span>
            </div>

            {studentsData.map((item) => (
                <div className="flex justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm" key={item.studentId}>
                    <span className="w-1/5 font-semibold text-gray-700 truncate">{item.name}</span>
                    <span className="w-1/5 text-gray-600 truncate">{item.email}</span>
                    <span className="w-1/12 text-gray-600">{item.grade}</span>
                    <span className="w-1/12 text-gray-600">{item.class}</span>
                    <span className="w-1/4 text-gray-600 truncate">{item.address}</span>
                    <span className="w-1/6 text-gray-600">{item.phone}</span>
                </div>
            ))}
        </div>




    );
};

export default StudentListPage;