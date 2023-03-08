import React, { useState, useRef } from "react";

export default function Education() {
    return (
        <div class="step-5">
        <div class="py-5 card border-0 rounded-0">
            <h4 class="card-header pl-0 border-0 fw-bold">4. Educational Background</h4>
            <div class="card-body pl-0 pt-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row mb-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Elementary</h6>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">School</label>
                                <input type="input"
                                    class="form-control !py-2.5 elementary_school !text-xs !text-gray-500 border-light-emphasis"
                                    />
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Course</label>
                                <input type="input"
                                    class="form-control elementary_course !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Year
                                    Graduated</label>
                                <input type="month"
                                    class="form-control elementary_year_graduated !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                            </div>
                            <div class="row !pr-0">
                                <h6
                                    class="fw-bold text-dark-emphasis !text-xs text-gray-500 !pr-0 !text-md">
                                    If undergraduate, </h6>
                                <div class="col-md-6 mb-2">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">What
                                        level?</label>
                                    <input type="text"
                                        class="form-control elementary_undergraduate_level !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                </div>
                                <div class="col-md-6 mb-2 !pr-0">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">year
                                        last attended</label>
                                    <input type="month"
                                        class="form-control !py-2.5 elementary_undergraduate_last_attended !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Awards
                                    recieved</label>
                                <input type="text"
                                    class="form-control !py-2.5 elementary_awards_recieved !text-xs !text-gray-500 border-light-emphasis"
                                    />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Secondary</h6>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">School</label>
                                <input type="input"
                                    class="form-control secondary_school !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Course</label>
                                <input type="input"
                                    class="form-control secondary_course !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Year
                                    Graduated</label>
                                <input type="month"
                                    class="form-control secondary_year_graduated !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="row !pr-0">
                                <h6
                                    class="fw-bold text-dark-emphasis !text-xs !pr-0 text-gray-500 !text-md">
                                    If undergraduate, </h6>
                                <div class="col-md-6 mb-2">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">What
                                        level?</label>
                                    <input type="text"
                                        class="form-control secondary_undergraduate_level !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                                <div class="col-md-6 mb-2 !pr-0">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">year
                                        last attended</label>
                                    <input type="month"
                                        class="form-control !py-2.5 secondary_undergraduate_last_attended !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Awards
                                    recieved</label>
                                <input type="text"
                                    class="form-control secondary_awards_recieved !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Tertiary</h6>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">School</label>
                                <input type="input"
                                    class="form-control tertiary_school !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Course</label>
                                <input type="input"
                                    class="form-control tertiary_course !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Year
                                    Graduated</label>
                                <input type="month"
                                    class="form-control tertiary_year_graduated !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="row !pr-0">
                                <h6
                                    class="fw-bold text-dark-emphasis !text-xs text-gray-500 !text-md">
                                    If undergraduate, </h6>
                                <div class="col-md-6 mb-2">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">What
                                        level?</label>
                                    <input type="text"
                                        class="form-control tertiary_undergraduate_level !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                                <div class="col-md-6 mb-2 !pr-0">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">year
                                        last attended</label>
                                    <input type="month"
                                        class="form-control !py-2.5 tertiary_undergraduate_last_attended !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Awards
                                    recieved</label>
                                <input type="text"
                                    class="form-control !py-2.5 !text-xs tertiary_awards_recieved !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-4">
                            <h6 class="fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md">
                                Graduate Studies</h6>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">School</label>
                                <input type="input"
                                    class="form-control !py-2.5 graduate_school !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Course</label>
                                <input type="input"
                                    class="form-control !py-2.5 graduate_course !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Year
                                    Graduated</label>
                                <input type="month"
                                    class="form-control !py-2.5 graduate_year_graduated !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                            <div class="row !pr-0">
                                <h6
                                    class="fw-bold text-dark-emphasis !text-xs text-gray-500 !text-md">
                                    If undergraduate, </h6>
                                <div class="col-md-6 mb-2">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">What
                                        level?</label>
                                    <input type="text"
                                        class="form-control graduate_undergraduate_level !py-2.5 !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                                <div class="col-md-6 mb-2 !pr-0">
                                    <label for="inputEmail4"
                                        class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">year
                                        last attended</label>
                                    <input type="month"
                                        class="form-control !py-2.5 graduate_last_attendend !text-xs !text-gray-500 border-light-emphasis"
                                        />
                                    
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputEmail4"
                                    class="form-label !text-xs text-gray-400 fw-bold text-light-emphasis">Awards
                                    recieved</label>
                                <input type="text"
                                    class="form-control !py-2.5 graduate_awards_recieved !text-xs !text-gray-500 border-light-emphasis"
                                    />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
