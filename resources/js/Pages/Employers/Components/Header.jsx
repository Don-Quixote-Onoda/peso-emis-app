import React, { useState, useRef } from "react";

export default function Header() {
    return (
        <header id="header" class="fixed-top d-flex align-items-center ">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h1>
                        <a href="/">PESO EMIS</a>
                    </h1>
                </div>
            </div>
        </header>
    );
}
