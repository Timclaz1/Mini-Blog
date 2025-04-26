import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
    // const location = useLocation();
    // const isPage2 = location.pathname === "/page2";
    return (
        <footer className="border-t border-gray-200 bg-blue-300 py-4 mt-8 ">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center ">
                <p className="text-sm text-gray-600 ">© 2025 My Blog. All rights reserved.</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 flex items-center hover:bg-gray-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                        </svg>
                        Save
                    </button>

{/* 
                    {isPage2 ? (
                        <Link to="/">
                            <button
                                className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white flex items-center hover:bg-blue-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={4}
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                        </Link> */}
                    {/* ) : ( */}
                    {/* <Link to="/page2"> */}
                    <a href="/Posts"  >
                        <button id="Next" className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white flex items-center hover:bg-blue-700">
                            Next
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={4}
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        </a>    
                    {/* </Link> */}
                    {/* )} */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
