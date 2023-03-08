import React, { useState, useRef } from "react";

export default function OtherSkills() {
    return (
        <div class="step-9">
        <div class="py-5 card border-0 rounded-0">
            <h4 class="card-header pl-0 border-0 fw-bold">8. OTHER SKILLS ACQUIRED WITHOUT FORMAL TRAINING                                </h4>
            <div class="card-body pl-0 pt-3">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Auto Mechanic" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Auto Mechanic
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Electrician" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Electrician
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Photography" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Photography
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Beautician" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Beautician
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Embroidery" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Embroidery
                            </label>
                        </div>
                    </div><div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Plumbing" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Plumbing
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Carpentry Work" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Carpentry Work
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Gardening" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Gardening
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Sewing Dresses" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Sewing Dresses
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Computer Literate" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Computer Literate
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Masonry" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Masonry
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Stenography" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Stenography
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Domestic Chores" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Domestic Chores
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Painter/Artist" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Painter/Artist
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Tailoring" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Tailoring
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Driving" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Driving
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input
                                class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                type="checkbox" name="osawft"
                                id="osawft" value="Painting Jobs" />
                            <label
                                class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                for="osawft">
                                Painting Jobs
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="input" placeholder="Others: "
                                class="form-control osawft-others !text-xs !py-2.5 !text-gray-500 border-light-emphasis" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
