import React from "react";

const projectsData = [
  { project: "Villa", start_date: "14/08/2023", percentage: 60, color: "red" },
  { project: "Antilia", start_date: "14/08/2023", percentage: 75, color: "emerald" },
  { project: "Hiranandani", start_date: "14/08/2023", percentage: 30, color: "orange" },
];

export default function ProjectStatus() {
  return (
    <div>
      <div className="overflow-x-auto w-[550px] m-auto">
        <h1 className="font-bold text-2xl text-center">Current Ongoing Projects Status</h1>
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse w-2/5">
          <thead className="thead-light">
            <tr>
              <th className="w-1/5 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Project
              </th>
              <th className="w-1/5 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Start Date
              </th>
              <th
                className="w-1/5 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                style={{ minWidth: "140px" }}
              >
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={index}>
                <th className="w-1/5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {project.project}
                </th>
                <td className="w-1/5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {project.start_date}
                </td>
                <td className="w-1/5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{project.percentage}%</span>
                    <div className="relative w-full">
                      <div className={`overflow-hidden h-2 text-xs flex rounded bg-${project.color}-200`}>
                        <div
                          style={{ width: `${project.percentage}%` }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${project.color}-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
