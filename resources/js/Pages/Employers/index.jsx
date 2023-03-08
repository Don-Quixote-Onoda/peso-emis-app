import React, { useState, useRef } from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

export default function Employers() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: "Personal",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "First Step",
                    detail: event.item.label,
                });
            },
        },
        {
            label: "Seat",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Second Step",
                    detail: event.item.label,
                });
            },
        },
        {
            label: "Payment",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Third Step",
                    detail: event.item.label,
                });
            },
        },
        {
            label: "Confirmation",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Last Step",
                    detail: event.item.label,
                });
            },
        },
    ];

    const counterIncrement = () => {
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const counterDecrement = () => {
        if (activeIndex >= 1) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <>
            <Header />
            <Content>
                
            </Content>
            <Footer />
            
        </>
    );
}
