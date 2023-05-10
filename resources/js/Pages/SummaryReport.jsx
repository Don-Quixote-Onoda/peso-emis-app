import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";
import { Button } from "primereact/button";

export default function SummaryReports(props) {
    const [monthData, setMonthData] = useState([]);
    const [weeksOfMonthData, setWeeksOfMonthData] = useState([]);
    const [daysOfMonthData, setDaysOfMonthData] = useState([]);
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
                label: "Applicants Applied in "+currentYear,
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

    let ref = useRef(null);

    const downloadChart = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
        console.log(test);
    }, []);

    Chart.register(CategoryScale);

    const div2PDF = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF")[0];

        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            const pdf = new pdfConverter("l", "pt");
            pdf.addImage(
                img,
                "png",
                input.offsetLeft,
                input.offsetTop,
                input.clientWidth,
                input.clientHeight
            );
            pdf.save("chart.pdf");
            but.style.display = "block";
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
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Summary Reports
                </h2>
                <div
                    className="flex justify-end pb-3"
                    onClick={(e) => div2PDF(e)}
                >
                    <Button label="Print"  />
                </div>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div
                        className="w-full overflow-x-auto card div2PDF flex p-5 flex-wrap gap-5 flex-row "
                        
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
            </div>
        </AuthenticatedLayout>
    );
}

// const [filteredDaysOfMonthData, setFilteredDaysOfMonthData] = useState([]);

//     useEffect(() => {
//         const applicants_report = props.applicants_report;
//         const currentDate = new Date();
//         const currentMonth = currentDate.getMonth() + 1;
//         const currentYear = currentDate.getFullYear();

//         console.log(applicants_report);

//         // Group by month
//         const applicantsByMonth = applicants_report.reduce((acc, curr) => {
//             const month = curr.month;
//             const weeks = curr.weeks;
//             const monthIndex = acc.findIndex((m) => m.month === month);
//             if (monthIndex === -1) {
//                 acc.push({
//                     month: month,
//                     weeks: weeks,
//                 });
//             } else {
//                 acc[monthIndex].weeks = acc[monthIndex].weeks.concat(weeks);
//             }
//             return acc;
//         }, []);

//         // Group each month by year
//         const applicantsByYear = applicantsByMonth.reduce((acc, curr) => {
//             const month = curr.month;
//             const weeks = curr.weeks;
//             const monthYear = currentYear + (month <= currentMonth ? 0 : -1);
//             const yearIndex = acc.findIndex((y) => y.year === monthYear);
//             if (yearIndex === -1) {
//                 acc.push({
//                     year: monthYear,
//                     months: [
//                         {
//                             month: month,
//                             weeks: weeks,
//                         },
//                     ],
//                 });
//             } else {
//                 const monthIndex = acc[yearIndex].months.findIndex(
//                     (m) => m.month === month
//                 );
//                 if (monthIndex === -1) {
//                     acc[yearIndex].months.push({
//                         month: month,
//                         weeks: weeks,
//                     });
//                 } else {
//                     acc[yearIndex].months[monthIndex].weeks =
//                         acc[yearIndex].months[monthIndex].weeks.concat(weeks);
//                 }
//             }
//             return acc;
//         }, []);

//         setMonthData(applicantsByMonth);
//         console.log('monthData');
//         console.log(monthData);

//         // Group each week by month
//         const weeksOfMonth = applicantsByMonth.map((month) => {
//             const weeks = month.weeks;
//             const weeksByMonth = weeks.reduce((acc, curr) => {
//                 const week = curr.week;
//                 const days = curr.days;
//                 const weekIndex = acc.findIndex((w) => w.week === week);
//                 if (weekIndex === -1) {
//                     acc.push({
//                         week: week,
//                         days: days,
//                     });
//                 } else {
//                     acc[weekIndex].days = acc[weekIndex].days.concat(days);
//                 }
//                 return acc;
//             }, []);
//             return {
//                 month: month.month,
//                 weeks: weeksByMonth,
//             };
//         });

//         let filteredMonthData = [];

//         // weeksOfMonth.map((month) => {
//         //     month.weeks.map((week) => {
//         //         week.days.map((day) => {
//         //             console.log(day);
//         //         })
//         //     })
//         //     filteredMonthData.push({
//         //         'month' : month.month
//         //     });
//         // });
//         setWeeksOfMonthData(weeksOfMonth);
//         // console.log(filteredMonthData);
//         // filteredMonthData.map((data) => {
//         //     console.log(data.month);
//         // })
//         console.log('weeksOfMonth');
//         console.log(weeksOfMonthData);

//         // Group each day by month
//         const daysOfMonth = applicantsByMonth.map((month) => {
//             const weeks = month.weeks;
//             const days = weeks.reduce((acc, curr) => {
//                 const days = curr.days;
//                 acc = acc.concat(days);
//                 return acc;
//             }, []);
//             return {
//                 month: month.month,
//                 days: days,
//             };
//         });

        
//         setDaysOfMonthData(daysOfMonth);

//         daysOfMonthData.map((data, index) => {
//             if((currentMonth-1) == index) {
//                 setFilteredDaysOfMonthData(data);
//             }
//         })
//         console.log('daysOfMonthData');
//         console.log(daysOfMonthData);
//         console.log(filteredDaysOfMonthData);

//     }, []);