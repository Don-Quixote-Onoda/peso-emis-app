import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Head } from "@inertiajs/react";
import axios from 'axios';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

NProgress.configure({ showSpinner: false });

export default function SummaryReports(props) {
    const [monthData, setMonthData] = useState([]);
    const [weeksOfMonthData, setWeeksOfMonthData] = useState([]);
    const [daysOfMonthData, setDaysOfMonthData] = useState([]);
    const [monthDataEmployer, setMonthDataEmployer] = useState([]);
    const [weeksOfMonthDataEmployer, setWeeksOfMonthDataEmployer] = useState([]);
    const [daysOfMonthDataEmployer, setDaysOfMonthDataEmployer] = useState([]);
    const [monthDataHired, setMonthDataHired] = useState([]);
    const [weeksOfMonthDataHired, setWeeksOfMonthDataHired] = useState([]);
    const [daysOfMonthDataHired, setDaysOfMonthDataHired] = useState([]);
    const currentDate = new Date();
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const currentMonth = currentDate.toLocaleString("default", {
        month: "long",
    });
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const currentWeek = Math.ceil(currentDay / 7);
    const [visibleDate, setVisibleDate] = useState(false);
    const [visibleApplicantsInformation, setVisibleApplicantsInformation] =
        useState(false);
        const [visibleEstablishmentsInformation, setVisibleEstablishmentsInformation] =
        useState(false);
    const regionalOffice = "DOLE RO 10 (NORTHERN MINDANAO)";
    const fieldOffice = "DOLE BUKIDNON FIELD OFFICE";
    const pesoOffice = "VALENCIA CITY (BUKIDNON)";

    const [applicantsDataReports, setApplicantsDataReports] = useState([]);
    const [establishmentsDataReports, setEstablishmentsDataReports] = useState([]);
    const [previewShowName, setPreviewShowName] = useState('');

    const handlePreviewShow = async (event) => {
        
        event.preventDefault();
    NProgress.start(); // Start the progress indicator

    try {
      const response = await axios.post(route('getApplicantsTimeRange'), {
       dateFrom: dateFrom,
       dateTo: dateTo
      });
     
      if (response.status === 200) {
        setApplicantsDataReports(response.data);
        NProgress.done(); // Stop the progress indicator
        setVisibleDate(false);
        setVisibleApplicantsInformation(true);
      }
    } catch (error) {
      // Handle error
    } finally {
    //   NProgress.done(); // Stop the progress indicator
    //   setVisibleDate(false);
    // setVisibleApplicantsInformation(true);
    }
    };

    const handlePreviewShowEstalishments = async (event) => {
        
        event.preventDefault();
    NProgress.start(); // Start the progress indicator
    try {
      const response = await axios.post(route('getEstablishmentsTimeRange'), {
       dateFrom: dateFrom,
       dateTo: dateTo
      });
     
      if (response.status === 200) {
        console.log(response.data);
        setEstablishmentsDataReports(response.data);
        NProgress.done(); // Stop the progress indicator
        setVisibleDate(false);
        setVisibleEstablishmentsInformation(true);
      }
    } catch (error) {
      // Handle error
    } finally {
    //   NProgress.done(); // Stop the progress indicator
    //   setVisibleDate(false);
    // setVisibleEstablishmentsInformation(true);
    }
    };

    const handlePreviewClose = () => {
        setVisibleDate(true);
        setVisibleApplicantsInformation(false);
    };
    useEffect(() => {
        const applicants_report = props.applicants_report;

        let filteredDaysOfMonthData = [];
        let filteredWeeksOfMonthData = [];
        let filterdMontData = [];
        applicants_report.map((monthData) => {
            let count = 0;
            if (monthData.month === currentMonth) {
                monthData.weeks.map((weekData) => {
                    if (weekData.week === "Week " + currentWeek) {
                        weekData.days.map((dayData) => {
                            filteredWeeksOfMonthData.push(dayData);
                        });
                    }
                    weekData.days.map((dayData) => {
                        filteredDaysOfMonthData.push(dayData);
                    });
                });
            }

            monthData.weeks.map((weekData) => {
                weekData.days.map((dayData) => {
                    count += dayData.applicants;
                });
            });
            filterdMontData.push({
                month: monthData.month,
                applicants: count,
            });
        });
        setDaysOfMonthData(filteredDaysOfMonthData);
        setWeeksOfMonthData(filteredWeeksOfMonthData);
        setMonthData(filterdMontData);
    }, []);
    const daysOfMonthDataGraph = {
        labels: daysOfMonthData.map((data) => data.day),
        datasets: [
            {
                label: "Applicants Applied in " + currentMonth,
                data: daysOfMonthData.map((data) => data.applicants),
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
        labels: weeksOfMonthData.map((data) => data.day),
        datasets: [
            {
                label: "Applicants Applied in Week " + currentWeek,
                data: weeksOfMonthData.map((data) => data.applicants),
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
        labels: monthData.map((data) => data.month),
        datasets: [
            {
                label: "Applicants Hired in " + currentYear,
                data: monthData.map((data) => data.applicants),
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
        const employer_applied_report = props.employer_applied_report;

        let filteredDaysOfMonthData = [];
        let filteredWeeksOfMonthData = [];
        let filterdMontData = [];
        employer_applied_report.map((monthData) => {
            let count = 0;
            if (monthData.month === currentMonth) {
                monthData.weeks.map((weekData) => {
                    if (weekData.week === "Week " + currentWeek) {
                        weekData.days.map((dayData) => {
                            filteredWeeksOfMonthData.push(dayData);
                        });
                    }
                    weekData.days.map((dayData) => {
                        filteredDaysOfMonthData.push(dayData);
                    });
                });
            }

            monthData.weeks.map((weekData) => {
                weekData.days.map((dayData) => {
                    count += dayData.employers;
                });
            });
            filterdMontData.push({
                month: monthData.month,
                employers: count,
            });
        });
        setDaysOfMonthDataEmployer(filteredDaysOfMonthData);
        setWeeksOfMonthDataEmployer(filteredWeeksOfMonthData);
        setMonthDataEmployer(filterdMontData);
        console.log(daysOfMonthDataEmployer);
        console.log(weeksOfMonthDataEmployer);
        console.log(monthDataEmployer);
    }, []);
    const daysOfMonthDataGraphEmployer = {
        labels: daysOfMonthDataEmployer.map((data) => data.day),
        datasets: [
            {
                label: "Establishments in " + currentMonth,
                data: daysOfMonthDataEmployer.map((data) => data.employers),
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

    const daysOfWeekMonthDataGraphEmployer = {
        labels: weeksOfMonthDataEmployer.map((data) => data.day),
        datasets: [
            {
                label: "Establishments in Week " + currentWeek,
                data: weeksOfMonthDataEmployer.map((data) => data.employers),
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

    const monthDataGraphEmployer = {
        labels: monthDataEmployer.map((data) => data.month),
        datasets: [
            {
                label: "Establishments in " + currentYear,
                data: monthDataEmployer.map((data) => data.employers),
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
        applicants_hired.map((monthData) => {
            let count = 0;
            if (monthData.month === currentMonth) {
                monthData.weeks.map((weekData) => {
                    if (weekData.week === "Week " + currentWeek) {
                        weekData.days.map((dayData) => {
                            filteredWeeksOfMonthData.push(dayData);
                        });
                    }
                    weekData.days.map((dayData) => {
                        filteredDaysOfMonthData.push(dayData);
                    });
                });
            }

            monthData.weeks.map((weekData) => {
                weekData.days.map((dayData) => {
                    count += dayData.hired_applicants;
                });
            });
            filterdMontData.push({
                month: monthData.month,
                applicants: count,
            });
        });
        setDaysOfMonthDataHired(filteredDaysOfMonthData);
        setWeeksOfMonthDataHired(filteredWeeksOfMonthData);

        setMonthDataHired(filterdMontData);
    }, []);

    const hiredDaysOfMonthDataGraph = {
        labels: daysOfMonthDataHired.map((data) => data.day),
        datasets: [
            {
                label: "Applicants Applied in " + currentMonth,
                data: daysOfMonthDataHired.map((data) => data.hired_applicants),
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
        labels: weeksOfMonthDataHired.map((data) => data.day),
        datasets: [
            {
                label: "Applicants Hired in Week " + currentWeek,
                data: weeksOfMonthDataHired.map(
                    (data) => data.hired_applicants
                ),
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
        labels: monthDataHired.map((data) => data.month),
        datasets: [
            {
                label: "Applicants Hired in " + currentYear,
                data: monthDataHired.map((data) => data.applicants),
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
        const month = today.toLocaleString("default", { month: "long" });
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

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(
                "Summary Report - Applicants Applied (" +
                    formattedDate +
                    ").pdf"
            );
        });
    };

    const handlePrintApplicantsReport = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("applicantsReportData")[0];

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(
                "Applicants Report - Applicants Applied (" +
                    formattedDate +
                    ").pdf"
            );
        });
        setVisibleApplicantsInformation(false);
    };

    const handlePrintEstablishmentsReport = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("establishmentsReportData")[0];

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(
                "Establishment Report - Applicants Applied (" +
                    formattedDate +
                    ").pdf"
            );
        });
        setVisibleEstablishmentsInformation(false);
    };

    const getCurrentDateFormat = () => {
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
        const day = today.getDate();
        const year = today.getFullYear();
        let hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Determine whether it is AM or PM
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert hours from 24-hour to 12-hour format
        if (hours > 12) {
            hours -= 12;
        }

        // Format the date and time as "Month day, year at hours:minutes:seconds AM/PM"
        const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${meridiem}`;

        return formattedDate;
    };
    const div2PDF2 = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
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

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(
                "Summary Report - Applicants Hired (" + formattedDate + ").pdf"
            );
        });
    };

    const filterStatus = (rowData) => {
        console.log(rowData.applicant_status.applicant_status_type.includes(null));
        return <span>{
            !rowData.applicant_status.applicant_status_type.includes(null)?     <span>{rowData.applicant_status.applicant_status_type.replaceAll('"', '')}</span>: ''
        }</span>
    }

    const filterEmployment = (rowData) => {

        return <span>
            {rowData.applicant_status.applicant_type !== null? <span>{rowData.applicant_status.applicant_type === 0? 'Employed' : 'Unemployed'}</span> : ''}
        </span>
    }

    const handleSetVisible = (name) => {
        setPreviewShowName(name);
        setVisibleDate(true);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div>
                    <h2
                        classNameName="font-semibold text-xl text-gray-800 leading-tight"
                        style={{ marginBottom: "1rem" }}
                    >
                        Summary Reports
                    </h2>
                    <div className="gap-2 flex flex-row justify-content-start">
                        <Button
                            label="Print Applicants"
                            icon="pi pi-external-link"
                            onClick={() => handleSetVisible('applicants')}
                        />
                        <Button
                            label="Print Establishment"
                            icon="pi pi-external-link"
                            onClick={() => handleSetVisible('establishments')}
                        />
                        <Dialog
                            header="Set report period"
                            visible={visibleDate}
                            style={{ width: "50vw" }}
                            onHide={() => setVisibleDate(false)}
                        >
                            <div className="flex-col flex mb-3 justify-content-center">
                                <p className="text-md font-bold my-1">
                                    Regional Office
                                </p>

                                <span className="p-float-label">
                                    <InputText
                                        id="username"
                                        className="w-full"
                                        value={regionalOffice}
                                        disabled
                                    />
                                </span>
                            </div>
                            <div className="flex-col flex mb-3 justify-content-center">
                                <p className="text-md font-bold my-1">Region</p>

                                <span className="p-float-label">
                                    <InputText
                                        id="username"
                                        className="w-full"
                                        value={"REGION 10 NORTHERN MINDANAO"}
                                        disabled
                                    />
                                </span>
                            </div>
                            <div className="flex-col flex mb-3 justify-content-center">
                                <p className="text-md font-bold my-1">
                                    Province
                                </p>

                                <span className="p-float-label">
                                    <InputText
                                        id="username"
                                        className="w-full"
                                        value={"BUKIDNON"}
                                        disabled
                                    />
                                </span>
                            </div>
                            <div className="flex gap-3 ">
                                <div
                                    className="flex-col flex mb-3 justify-content-center"
                                    style={{ flexBasis: "50%" }}
                                >
                                    <p className="text-md font-bold my-1">
                                        Date From
                                    </p>

                                    <span className="p-float-label">
                                        <Calendar
                                            className="w-full"
                                            value={dateFrom}
                                            onChange={(e) =>
                                                setDateFrom(e.value)
                                            }
                                            showIcon
                                        />
                                    </span>
                                </div>
                                <div
                                    className="flex-col flex mb-3 justify-content-center"
                                    style={{ flexBasis: "50%" }}
                                >
                                    <p className="text-md font-bold my-1">
                                        Date To
                                    </p>

                                    <span className="p-float-label">
                                        <Calendar
                                            className="w-full"
                                            value={dateTo}
                                            onChange={(e) => setDateTo(e.value)}
                                            showIcon
                                        />
                                    </span>
                                </div>
                            </div>
                            <Button
                                label="Preview"
                                icon="pi pi-eye"
                                onClick={e => previewShowName == 'applicants' ? handlePreviewShow(e) : handlePreviewShowEstalishments(e)}
                            />
                        </Dialog>
                        <Dialog
                            header="Set report period"
                            visible={visibleApplicantsInformation}
                            style={{ width: "85vw" }}
                            onHide={() =>
                                setVisibleApplicantsInformation(false)
                            }
                        >
                            <div className="applicantsReportData p-5">
                                <div className="applicant-header">
                                    <div className="top-header">
                                        <h5 className="text-center mb-1">
                                            Republic of the Philippines
                                        </h5>
                                        <h5 className="text-center mb-1">
                                            Department of Labor and Employment
                                        </h5>
                                        <h3 className="text-center font-bold text-xl mb-1">
                                            NATIONAL SKILLS REGISTRATION PROGRAM
                                        </h3>
                                        <h3 className="text-center font-bold text-md mb-5">
                                            Jobseekers Employment Status Report
                                        </h3>
                                    </div>
                                    <div className="top-title mb-5">
                                        <table className="w-full">
                                            <tr>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Regional Office:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {regionalOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Field Office:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {fieldOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            PESO:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {pesoOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Date Coverage:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {new Date(
                                                                dateFrom
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "numeric",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}{" "}
                                                            to{" "}
                                                            {new Date(
                                                                dateTo
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "numeric",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="applicant-body">
                                <div className="card my-3">
            <DataTable value={applicantsDataReports} tableStyle={{ minWidth: '50rem' }}>
                    <Column field='id' header='No.' />
                    <Column field='full_name' header='Name' />
                    <Column field='phone_number' header='Contact no.' />
                    <Column field='sex' header='Sex' />
                    <Column field='applicant_status.applicant_status_type'body={filterEmployment} header='Status (as of registration or last update)' />
                    <Column field='full_name' body={filterStatus} header='Status: Employed or Unemployed' />
            </DataTable>
        </div>
                                </div>
                            </div>
                            <Button
                                label="Print"
                                icon="pi pi-eye"
                                onClick={(e) => handlePrintApplicantsReport(e)}
                            />
                        </Dialog>
                        <Dialog
                            header="Set report period"
                            visible={visibleEstablishmentsInformation}
                            style={{ width: "85vw" }}
                            onHide={() =>
                                setVisibleEstablishmentsInformation(false)
                            }
                        >
                            <div className="establishmentsReportData p-5">
                                <div className="applicant-header">
                                    <div className="top-header">
                                        <h5 className="text-center mb-1">
                                            Republic of the Philippines
                                        </h5>
                                        <h5 className="text-center mb-1">
                                            Department of Labor and Employment
                                        </h5>
                                        <h3 className="text-center font-bold text-xl mb-1">
                                            NATIONAL SKILLS REGISTRATION PROGRAM
                                        </h3>
                                        <h3 className="text-center font-bold text-md mb-5">
                                            Establishments Status Report
                                        </h3>
                                    </div>
                                    <div className="top-title mb-5">
                                        <table className="w-full">
                                            <tr>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Regional Office:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {regionalOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Field Office:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {fieldOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            PESO:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {pesoOffice}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold text-md">
                                                            Date Coverage:{" "}
                                                        </p>
                                                        <p className="underline">
                                                            {new Date(
                                                                dateFrom
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "numeric",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}{" "}
                                                            to{" "}
                                                            {new Date(
                                                                dateTo
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "numeric",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="applicant-body">
                                <div className="card my-3">
            <DataTable value={establishmentsDataReports} tableStyle={{ minWidth: '50rem' }}>
                    <Column field='id' header='No.' />
                    <Column field='establishment_name' header='Establishment Name' />
                    <Column field='employer_establishment_contact_detail.email_address' header='Email Address' />
                    <Column field='employer_establishment_contact_detail.mobile_number' header='Contact Person' />
                    <Column field='employer_vacancy_detail.length' header='Number of Jobs Posted' />
                   
            </DataTable>
        </div>
                                </div>
                            </div>
                            <Button
                                label="Print"
                                icon="pi pi-eye"
                                onClick={(e) => handlePrintEstablishmentsReport(e)}
                            />
                        </Dialog>
                    </div>
                </div>
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
                        <Button
                            label="Print Applicant Applied Report"
                            style={{ background: "#FF6384", border: "none" }}
                            className="py-1 px-3 bg-red-900"
                        />
                    </div>
                    <div className="w-full mb-8 div2PDF1 overflow-hidden rounded-lg shadow-xs">
                        <h1 className="text-2xl text-center mb-0 font-bold">
                            Applicants Applied
                        </h1>
                        <span className="text-xs text-center mb-4 font-bold d-block">
                            {"(" + getCurrentDateFormat() + ")"}
                        </span>

                        <div className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row summary-report">
                            <div>
                                <Bar
                                    ref={ref}
                                    data={daysOfMonthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={daysOfWeekMonthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={monthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex justify-center pb-3"
                        onClick={(e) => div2PDF2(e)}
                    >
                        <Button
                            label="Print Applicant Hired Report"
                            style={{ background: "#FF6384", border: "none" }}
                            className="py-1 px-3 bg-red-900"
                        />
                    </div>
                    <div className="w-full mb-8 div2PDF2 overflow-hidden rounded-lg shadow-xs">
                        <h1 className="text-2xl text-center mb-0 font-bold">
                            Applicants Hired
                        </h1>
                        <span className="text-xs text-center mb-4 font-bold d-block">
                            {"(" + getCurrentDateFormat() + ")"}
                        </span>
                        <div className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row summary-report ">
                            <div>
                                <Bar
                                    ref={ref}
                                    data={hiredDaysOfMonthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={hiredDaysOfWeekMonthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={hiredMonthDataGraph}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div
                        className="flex justify-center pb-3"
                        onClick={(e) => div2PDF1(e)}
                    >
                        <Button
                            label="Print Establishments Report"
                            style={{ background: "#FF6384", border: "none" }}
                            className="py-1 px-3 bg-red-900"
                        />
                    </div>
                    <div className="w-full mb-8 div2PDF1 overflow-hidden rounded-lg shadow-xs">
                        <h1 className="text-2xl text-center mb-0 font-bold">
                            Establishment
                        </h1>
                        <span className="text-xs text-center mb-4 font-bold d-block">
                            {"(" + getCurrentDateFormat() + ")"}
                        </span>

                        <div className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row summary-report">
                            <div>
                                <Bar
                                    ref={ref}
                                    data={daysOfMonthDataGraphEmployer}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={daysOfWeekMonthDataGraphEmployer}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <Bar
                                    ref={ref}
                                    data={monthDataGraphEmployer}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
