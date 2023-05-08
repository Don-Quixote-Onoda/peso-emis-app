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

    useEffect(() => {
        const applicants_report = props.applicants_report;
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        // Group by month
        const applicantsByMonth = applicants_report.reduce((acc, curr) => {
            const month = curr.month;
            const weeks = curr.weeks;
            const monthIndex = acc.findIndex((m) => m.month === month);
            if (monthIndex === -1) {
                acc.push({
                    month: month,
                    weeks: weeks,
                });
            } else {
                acc[monthIndex].weeks = acc[monthIndex].weeks.concat(weeks);
            }
            return acc;
        }, []);

        // Group each month by year
        const applicantsByYear = applicantsByMonth.reduce((acc, curr) => {
            const month = curr.month;
            const weeks = curr.weeks;
            const monthYear = currentYear + (month <= currentMonth ? 0 : -1);
            const yearIndex = acc.findIndex((y) => y.year === monthYear);
            if (yearIndex === -1) {
                acc.push({
                    year: monthYear,
                    months: [
                        {
                            month: month,
                            weeks: weeks,
                        },
                    ],
                });
            } else {
                const monthIndex = acc[yearIndex].months.findIndex(
                    (m) => m.month === month
                );
                if (monthIndex === -1) {
                    acc[yearIndex].months.push({
                        month: month,
                        weeks: weeks,
                    });
                } else {
                    acc[yearIndex].months[monthIndex].weeks =
                        acc[yearIndex].months[monthIndex].weeks.concat(weeks);
                }
            }
            return acc;
        }, []);

        setMonthData(applicantsByMonth);
        // console.log(monthData);

        // Group each week by month
        const weeksOfMonth = applicantsByMonth.map((month) => {
            const weeks = month.weeks;
            const weeksByMonth = weeks.reduce((acc, curr) => {
                const week = curr.week;
                const days = curr.days;
                const weekIndex = acc.findIndex((w) => w.week === week);
                if (weekIndex === -1) {
                    acc.push({
                        week: week,
                        days: days,
                    });
                } else {
                    acc[weekIndex].days = acc[weekIndex].days.concat(days);
                }
                return acc;
            }, []);
            return {
                month: month.month,
                weeks: weeksByMonth,
            };
        });

        setWeeksOfMonthData(weeksOfMonth);
        // console.log(weeksOfMonth);

        // Group each day by month
        const daysOfMonth = applicantsByMonth.map((month) => {
            const weeks = month.weeks;
            const days = weeks.reduce((acc, curr) => {
                const days = curr.days;
                acc = acc.concat(days);
                return acc;
            }, []);
            return {
                month: month.month,
                days: days,
            };
        });

        setDaysOfMonthData(daysOfMonth);
        console.log(daysOfMonthData);

    }, [props.applicants_report]);

    // const [monthData, setMonthData] = useState([]);
    // const [weeksOfMonthData, setWeeksOfMonthData] = useState([]);

    // useEffect(() => {
    //     let applicantsEachMonth = [];
    //     props.applicants_report.forEach((month) => {
    //       let countDays = 0;
    //       month.weeks.forEach((week) => {
    //         week.days.forEach((day) => {
    //           countDays += day.applicants;
    //         });
    //       });
    //       applicantsEachMonth.push({
    //         month: month.month,
    //         applicants: countDays,
    //       });
    //     });
    //     setMonthData(applicantsEachMonth);
    //     monthData.map((data) => {

    //     })
    // }, []);

    // useEffect(() => {
    //     const year = new Date().getFullYear();

    //     const monthsData = [];
    //     for (let month = 1; month <= 12; month++) {
    //       const daysInMonth = new Date(year, month, 0).getDate();

    //       const weeksData = [];
    //       let startOfWeek = null;
    //       let weekCount = 1;
    //       for (let day = 1; day <= daysInMonth; day++) {
    //         const date = new Date(year, month - 1, day);
    //         const applicants = getApplicantsByDate(date);

    //         if (!startOfWeek) {
    //           startOfWeek = date;
    //         }

    //         if (date.getDay() === 6 || day === daysInMonth) {
    //           const endOfWeek = day === daysInMonth ? date : new Date(date.getTime() + (6 - date.getDay()) * 24 * 60 * 60 * 1000);
    //           const weekApplicants = getApplicantsByWeek(startOfWeek, endOfWeek);

    //           weeksData.push({
    //             week: `Week ${weekCount}`,
    //             start: startOfWeek,
    //             end: endOfWeek,
    //             applicants: weekApplicants
    //           });

    //           startOfWeek = null;
    //           weekCount++;
    //         }

    //         if (day === daysInMonth) {
    //           const monthApplicants = getApplicantsByMonth(year, month);

    //           monthsData.push({
    //             month: date.toLocaleString('default', { month: 'long' }),
    //             weeks: weeksData,
    //             applicants: monthApplicants
    //           });
    //         }
    //       }
    //     }

    //     setWeeksOfMonthData(monthsData);
    //     console.log(monthsData);
    //   }, []);
    // const monthsData = {
    //     labels: monthData.map(data => data.month),
    //     datasets: [
    //         {
    //             label: "Montly Applicants Applied",
    //             data: monthData.map(data => data.applicants),
    //             backgroundColor: [
    //                 "#FF6384",
    //                 "#36A2EB",
    //                 "#FFCE56",
    //                 "#ccc",
    //                 "#ccc",
    //             ],
    //             hoverOffset: 4,
    //         },
    //     ],
    // };

    let ref = useRef(null);

    // const downloadChart = useCallback(() => {
    //     const link = document.createElement("a");
    //     link.download = "chart.png";
    //     link.href = ref.current.toBase64Image();
    //     link.click();
    //     console.log(test);
    // }, []);

    // Chart.register(CategoryScale);

    // const div2PDF = (e) => {
    //     /////////////////////////////
    //     // Hide/show button if you need
    //     /////////////////////////////

    //     const but = e.target;
    //     // but.style.display = "none";
    //     let input = window.document.getElementsByClassName("div2PDF")[0];

    //     html2canvas(input).then((canvas) => {
    //         const img = canvas.toDataURL("image/png");
    //         const pdf = new pdfConverter("l", "pt");
    //         pdf.addImage(
    //             img,
    //             "png",
    //             input.offsetLeft,
    //             input.offsetTop,
    //             input.clientWidth,
    //             input.clientHeight
    //         );
    //         pdf.save("chart.pdf");
    //         but.style.display = "block";
    //     });
    // };

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
                {/* <div
                    className="flex justify-end"
                    onClick={(e) => div2PDF(e)}
                >
                    <Button label="Print"  />
                </div> */}
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div
                        className="w-full overflow-x-auto card div2PDF"
                        style={{
                            height: "600px",
                            width: "600px",
                            margin: "auto",
                        }}
                    >
                        {/* <Bar ref={ref} data={monthsData} /> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
