import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "primereact/button";
import { Head } from '@inertiajs/react';

export default function SummaryReports(props) {
    const [monthData, setMonthData] = useState([]);
    const [weeksOfMonthData, setWeeksOfMonthData] = useState([]);
    const [daysOfMonthData, setDaysOfMonthData] = useState([]);
    const [monthDataHired, setMonthDataHired] = useState([]);
    const [weeksOfMonthDataHired, setWeeksOfMonthDataHired] = useState([]);
    const [daysOfMonthDataHired, setDaysOfMonthDataHired] = useState([]);
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const currentWeek = Math.ceil(currentDay / 7);
 
    useEffect(() => {
        const applicants_report = props.applicants_report;

        let filteredDaysOfMonthData = [];
        let filteredWeeksOfMonthData = [];
        let filterdMontData = [];
        applicants_report.map(monthData => {
            let count = 0;
            if(monthData.month === currentMonth)
            {
                monthData.weeks.map(weekData => {
                    if(weekData.week === 'Week '+currentWeek) {
                        weekData.days.map(dayData => {
                            filteredWeeksOfMonthData.push(dayData);
                        });
                    }
                    weekData.days.map(dayData => {
                        filteredDaysOfMonthData.push(dayData);
                    });
                });
            }

            monthData.weeks.map(weekData => {
                weekData.days.map(dayData => {
                    count += dayData.applicants;
                });
            });
            filterdMontData.push({
                'month':monthData.month,
                'applicants': count
            });
        });
        setDaysOfMonthData(filteredDaysOfMonthData);
        setWeeksOfMonthData(filteredWeeksOfMonthData);
        setMonthData(filterdMontData);
    }, []);
    const daysOfMonthDataGraph = {
        labels: daysOfMonthData.map(data => data.day),
        datasets: [
            {
                label: "Applicants Applied in "+currentMonth,
                data: daysOfMonthData.map(data => data.applicants),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#ccc",
                    "#ccc",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const daysOfWeekMonthDataGraph = {
        labels: weeksOfMonthData.map(data => data.day),
        datasets: [
            {
                label: "Applicants Applied in Week "+currentWeek,
                data: weeksOfMonthData.map(data => data.applicants),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#ccc",
                    "#ccc",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const monthDataGraph = {
        labels: monthData.map(data => data.month),
        datasets: [
            {
                label: "Applicants Hired in "+currentYear,
                data: monthData.map(data => data.applicants),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#ccc",
                    "#ccc",
                ],
                hoverOffset: 4,
            },
        ],
    };
    useEffect(() => {
        const applicants_hired = props.applicants_hired;
        
        let filteredDaysOfMonthData = [];
        let filteredWeeksOfMonthData = [];
        let filterdMontData = [];
        applicants_hired.map(monthData => {
            let count = 0;
            if(monthData.month === currentMonth)
            {
                monthData.weeks.map(weekData => {
                    if(weekData.week === 'Week '+currentWeek) {
                        weekData.days.map(dayData => {
                            filteredWeeksOfMonthData.push(dayData);
                        });
                    }
                    weekData.days.map(dayData => {
                        filteredDaysOfMonthData.push(dayData);
                    });
                });
            }

            monthData.weeks.map(weekData => {
                weekData.days.map(dayData => {
                    count += dayData.hired_applicants;
                });
            });
            filterdMontData.push({
                'month':monthData.month,
                'applicants': count
            });
        });
        setDaysOfMonthDataHired(filteredDaysOfMonthData);
        setWeeksOfMonthDataHired(filteredWeeksOfMonthData);
        console.log(filterdMontData);

        setMonthDataHired(filterdMontData);
    }, []);



    const hiredDaysOfMonthDataGraph = {
        labels: daysOfMonthDataHired.map(data => data.day),
        datasets: [
            {
                label: "Applicants Applied in "+currentMonth,
                data: daysOfMonthDataHired.map(data => data.hired_applicants),
                backgroundColor: [
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#ffce56",
                    "#ffce56",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const hiredDaysOfWeekMonthDataGraph = {
        labels: weeksOfMonthDataHired.map(data => data.day),
        datasets: [
            {
                label: "Applicants Hired in Week "+currentWeek,
                data: weeksOfMonthDataHired.map(data => data.hired_applicants),
                backgroundColor: [
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#ffce56",
                    "#ffce56",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const hiredMonthDataGraph = {
        labels: monthDataHired.map(data => data.month),
        datasets: [
            {
                label: "Applicants Hired in "+currentYear,
                data: monthDataHired.map(data => data.applicants),
                backgroundColor: [
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#ffce56",
                    "#ffce56",
                ],
                hoverOffset: 4,
            },
        ],
    };

    let ref = useRef(null);
    Chart.register(CategoryScale);

    const div2PDF1 = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        
        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;
        
        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF1")[0];
        console.log(input.offsetLeft);
        console.log(input.offsetTop);
        console.log(input.clientWidth);
        console.log(input.clientHeight);
        html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Summary Report - Applicants Applied ('+formattedDate+').pdf');
      });
    };

    const getCurrentDateFormat = () => {
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate();
        const year = today.getFullYear();
        let hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Determine whether it is AM or PM
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        // Convert hours from 24-hour to 12-hour format
        if (hours > 12) {
        hours -= 12;
        }

        // Format the date and time as "Month day, year at hours:minutes:seconds AM/PM"
        const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${meridiem}`;


        return formattedDate;
    }
    const div2PDF2 = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        
        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;
        
        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF2")[0];
        console.log(input.offsetLeft);
        console.log(input.offsetTop);
        console.log(input.clientWidth);
        console.log(input.clientHeight);
        html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Summary Report - Applicants Hired ('+formattedDate+').pdf');
      });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Summary Reports
                </h2>
            }
        >
            <Head title="EMIS - Summary Reports" />
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Summary Reports
                </h2>
                
                <div className="">
                <div
                    className="flex justify-center pb-3"
                    onClick={(e) => div2PDF1(e)}
                >
                    <Button label="Print Applicant Applied Report" style={{background: "#FF6384", border: "none"}} className="py-1 px-3 bg-red-900"  />
                </div>
                <div className="w-full mb-8 div2PDF1 overflow-hidden rounded-lg shadow-xs">
                <h1 className="text-2xl text-center mb-0 font-bold">Applicants Applied</h1>
                <span className="text-xs text-center mb-4 font-bold d-block">{"("+getCurrentDateFormat()+")"}</span>
                

                    <div
                        className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row "
                        
                    >
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={daysOfMonthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={daysOfWeekMonthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={monthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center pb-3"
                    onClick={(e) => div2PDF2(e)}
                >
                    <Button label="Print Applicant Hired Report" style={{background: "#FF6384", border: "none"}} className="py-1 px-3 bg-red-900"  />
                </div>
                <div className="w-full mb-8 div2PDF2 overflow-hidden rounded-lg shadow-xs">
                <h1 className="text-2xl text-center mb-0 font-bold">Applicants Hired</h1>
                <span className="text-xs text-center mb-4 font-bold d-block">{"("+getCurrentDateFormat()+")"}</span>
                    <div
                        className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row "
                        
                    >
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={hiredDaysOfMonthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={hiredDaysOfWeekMonthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={hiredMonthDataGraph} style={{width: '100%', height: 'auto'}} />
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
