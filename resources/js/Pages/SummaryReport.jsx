import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {Doughnut} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf';

export default function SummaryReports(props) {

    const data = {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
           {
            label: "My Dataset",
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#ccc", "#ccc"],
            hoverOffset: 4,
           }
        ]
    }

    let ref = useRef(null);

    const downloadChart = useCallback(() => {
        const link = document.createElement('a');
        link.download = "chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
        console.log(test);
    }, []);

    Chart.register(CategoryScale);

    const div2PDF = e => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF")[0];
    
        html2canvas(input).then(canvas => {
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
                <button type="button" onClick={e => div2PDF(e)} >Download</button>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card div2PDF" style={{height: "600px", width: "600px", margin:"auto"}}>
                    <Bar ref={ref}  data={data} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
