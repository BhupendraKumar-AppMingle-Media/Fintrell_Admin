import { NavLink } from "react-router-dom";
import { Logos } from "../assets/assets";
import SupportSVG from "../assets/SupportSVG";

import { BiSolidPlaneAlt } from "react-icons/bi";
import { SiMessenger } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { SiEnterprisedb } from "react-icons/si";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isCrmDropdownOpen, setIsCrmDropdownOpen] = useState(false);

  const toggleProjectDropdown = () =>
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  const toggleCrmDropdown = () => setIsCrmDropdownOpen(!isCrmDropdownOpen);
// bg-[#f4f9fd]
  return (
    <div
      className="h-full overflow-y-auto ml-4  bg-white shadow-md flex flex-col justify-between rounded-2xl py-4 sticky top-2 
    custom-scrollbar
    "
    >
      {/* Top Section */}
      <div className="my-5">
        {/* Logo */}
        <div className="flex items-center justify-start w-full h-16">
          <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center ml-6">
            <img src={Logos.Logo} alt="Logo" className="w-14 h-14" />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 h-[50vh] mb-5">
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/dashboard"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <MdDashboard className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/enterprise"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <SiEnterprisedb className="w-6 h-6" />
              <span className="font-medium">Enterprise</span>
            </NavLink>
          </li>
          {/* Project Report with Dropdown */}
          <li className="w-full px-4">
            <div
              onClick={toggleProjectDropdown}
              className="flex items-center justify-between space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <div className="flex items-center space-x-3">
                <AiFillProject className="w-6 h-6" />
                <span className="font-medium">Project Report</span>
              </div>
              <span>{isProjectDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {isProjectDropdownOpen && (
              <ul className=" ml-8 mt-2 space-y-2 font-medium text-lg">
                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/project-overview"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Project Overview
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/objective"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Objective
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/benefits"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Benefits
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/future-outlook"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Future outlook
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/growth-and-market"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Growth and Market
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/project-proponent"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Project Proponent
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/brief-project-description"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Brief project Description
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/need-of-the-project"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Need of The Project
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/technical-feasibilty"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Technical Feasibilty
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/Strengths"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Strengths
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/Weaknesses"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Weaknesses
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/Opportunities"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Opportunities
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/threats"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Threats
                      </NavLink>
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </li>
          {/* CRM with Dropdown */}
          <li className="w-full px-4">
            <div
              onClick={toggleCrmDropdown}
              className="flex items-center justify-between space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <div className="flex items-center space-x-3">
                <BiSolidPlaneAlt className="w-6 h-6" />
                <span className="font-medium">CMA</span>
              </div>
              <span>{isCrmDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {isCrmDropdownOpen && (
              <ul className="ml-8 mt-2 space-y-2 font-medium text-lg ">
                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/assumptions"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Assumptions
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/costofproject"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Cost Of Project
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/meansoffinance"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Means Of Finance
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/profit-loss"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Profit and Loss
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/balance-sheet"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Balance Sheet
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/indirect-expenses"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Indirect Expenses
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/dep"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        DEP
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/cash-flow"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Cash Flow
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/dscr"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        DSCR
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/financial-indicator"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Financial Indicator
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/current-ratio"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Current Ratio
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/sensitivity-analytics"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Sensitivity Analytics
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/break-even-point"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        Break Even Point
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/roi-irr"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        ROI & IRR
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/emi-schedular"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                        EMI Sechedular
                      </NavLink>
                    </li>
                  </div>
                </div>

                {/*                 
<div className="flex">
                  <div className="inline mr-2 ">▪</div>
                  <div>
                    <li>
                      <NavLink
                        to="/meansoffinance"
                        className="text-gray-500 hover:text-blue-500 text-sm mr-2"
                      >
                          Downlaod
                      </NavLink>
                    </li>
                  </div>
                </div> */}
              </ul>
            )}
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/employees"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <IoPeopleSharp className="w-6 h-6" />
              <span className="font-medium"> Preview</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/messenger"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <SiMessenger className="w-6 h-6" />
              <span className="font-medium"> Downlaod</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/info-portal-home"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <FaFolder className="w-6 h-6" />
              <span className="font-medium">Info Portal</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      {/* <div className="mt-40">
        <div className="w-full flex justify-start">
          <SupportSVG />
        </div>
        <div className="mt-6 px-4 flex items-center space-x-3 text-gray-500 hover:text-red-500 cursor-pointer text-base">
          <RiLogoutBoxFill className="w-6 h-6" />
          <span>Logout</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
