import React, { useState, useRef } from "react";

export default function NavigatorButton({activeIndex, numberOfPage, setActiveIndex, counterPrevious}) {
    return (
        <div class="action-buttons w-full bottom-0 d-flex justify-content-between bg-white pt-2 pb-2">
                {activeIndex == 0 && <div class="button-1"></div>}
                {activeIndex > 0 && (
                    <button
                        type="button"
                        onClick={() => counterPrevious()}
                        class="btn btn-md btn btn-md items-center d-flex gap-3 py-2 px-4 prev-button  !rounded-full !text-xs text-white font-bold !bg-indigo-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-4 h-4 fill-white"
                        >
                            <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                        </svg>
                        Back
                    </button>
                )}
                {activeIndex < numberOfPage - 1 && (
                    <button
                        type="submit"
                        // onClick={() => handleForm()}
                        
                        className="btn btn-md items-center d-flex gap-3 py-2 !bg-pink-400 px-4 !rounded-full next-button"
                    >
                        <span class="!text-xs font-bold text-white">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-4 h-4 fill-white"
                        >
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                )}
                {activeIndex > numberOfPage - 2 && (
                    <button
                        type="submit"
                        class="btn btn-md btn-primary !bg-blue-900 !border-blue-900 submit-button"
                    >
                        Submit
                    </button>
                )}
            </div>
    );
}
