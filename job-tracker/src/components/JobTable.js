import axios from "axios"
import {format} from "date-fns"
import { useEffect, useState } from "react"

const baseUrl = "http://localhost:5000";

export default function JobTable() {

    const [jobList, setJobList] = useState([]);

    const fetchJobs = async () => {
        const data = await axios.get(`${baseUrl}/jobs`);
        const { jobs } = data.data;
        setJobList(jobs);
        console.log(jobs);
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <table className='shadow-sm w-5/6 text-center border-collapse mx-auto mt-10 rounded-md'>
            <thead className='border-b-3 border-gray-300 bg-blue-900 text-white'>
                <tr>
                    <th className="p-3 tracking-wide font-semibold">Company</th>
                    <th className="p-3 tracking-wide font-semibold">Job Position</th>
                    <th className="p-2 tracking-wide font-semibold">Salary/Experience Level</th>
                    <th className="p-3 tracking-wide font-semibold">Location</th>
                    <th className="p-3 tracking-wide font-semibold">Date Added</th>
                    <th className="p-3 tracking-wide font-semibold">Progress</th>
                </tr>
            </thead>
            <tbody className="tracking-wide">
                {jobList.map(job => (
                    <tr key={job.id}>
                        <td className='border p-3 text-gray-00'>{job.company}</td>
                        <td className='border p-3 text-gray-800'>{job.job_position}</td>
                        <td className='border p-3 text-gray-800'>{job.salary_experience}</td>
                        <td className='border p-3 text-gray-800'>{job.location}</td>
                        <td className='border p-3 text-gray-800'>{job.date_added}</td>
                        <td className='border p-3 text-gray-800'><span className={`p-1.5 uppercase text-xs font-medium tracking-wider ${job.progress_style} bg-opacity-50 rounded-md`}>{job.progress}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};