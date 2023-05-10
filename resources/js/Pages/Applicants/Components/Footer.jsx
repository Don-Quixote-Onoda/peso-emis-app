import React, { useState, useRef } from "react";

export default function Footer() {
    return (
        <footer id="footer">
                <div class="container">
                    <h3>PESO EMIS</h3>
                    <p>
                        A smooth-sailing information system for both Establishments and Jobseekers.
                    </p>
                    <div class="social-links">
                        <a href="#" class="twitter">
                            <i class="bx bxl-twitter"></i>
                        </a>
                        <a href="#" class="facebook">
                            <i class="bx bxl-facebook"></i>
                        </a>
                        <a href="#" class="instagram">
                            <i class="bx bxl-instagram"></i>
                        </a>
                        <a href="#" class="google-plus">
                            <i class="bx bxl-skype"></i>
                        </a>
                        <a href="#" class="linkedin">
                            <i class="bx bxl-linkedin"></i>
                        </a>
                    </div>
                    <div class="copyright">
                        &copy; Copyright{" "}
                        <strong>
                            <span>PESO EMIS</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by Archie Quintero
                    </div>
                </div>
            </footer>
    );
}
