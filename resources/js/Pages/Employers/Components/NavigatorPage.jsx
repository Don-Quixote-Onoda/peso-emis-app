import React, { useState, useRef } from "react";

export default function NavigatorPage({length, activeIndex, index, children}) {
    return (
        <>
            <span class={`!text-xs uppercase font-bold nav-1 ${(index == activeIndex) ? "text-pink-400": "!text-gray-400"}`}>
                {children}
            </span>
            {index <  (length - 1) && <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-3 h-3 fill-gray-400"
            >
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>}
        </>
    );
}
