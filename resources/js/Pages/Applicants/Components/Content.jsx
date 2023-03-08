import React, { useState, useRef } from "react";

export default function Content({children}) {
    return (
        <div class="mt-36 !pl-5 mb-14 !p-0 !mr-0 ">
            {children}
        </div>
    );
}
