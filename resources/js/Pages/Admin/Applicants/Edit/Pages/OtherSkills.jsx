import React, { useState, useRef } from "react";
import { useSessionStorage, useLocalStorage } from "primereact/hooks";
import { Checkbox } from 'primereact/checkbox';
        
export default function OtherSkills(props) {

    

    const [checked, setChecked] = useState(false);


    const [OtherSkill, setOtherSkill] = useState("");
    const [OtherSkills, setOtherSkills] = useSessionStorage(
        sessionStorage.getItem("OtherSkills"),
        "OtherSkills"
    );

    const handleOtherSkill = (value, e) => {
        if(e.target.checked && !OtherSkill.includes(value)) {

            setOtherSkill(OtherSkill + " " + value);

        }
        else {
            setOtherSkill(OtherSkill.replace(value,''));
        }

        console.log(OtherSkill);
};

    return (
            <div class="step-9">
            <div class="py-5 card border-0 rounded-0">
                <h4 class="card-header pl-0 border-0 fw-bold">
                    8. OTHER SKILLS ACQUIRED WITHOUT FORMAL TRAINING{" "}
                </h4>
                <div class="card-body pl-0 pt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Auto Mechanic"
                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Auto Mechanic",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Auto Mechanic
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Electrician"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Electrician",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Electrician
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Photography"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Photography",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Photography
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Beautician"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Beautician",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Beautician
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Embroidery"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Embroidery",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Embroidery
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Plumbing"
                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Plumbing",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Plumbing
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Carpentry Work"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Carpentry Work",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Carpentry Work
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Gardening"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Gardening",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Gardening
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Sewing Dresses"
                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Sewing Dresses",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Sewing Dresses
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Computer Literate"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Computer Literate",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Computer Literate
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Masonry"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Masonry",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Masonry
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Stenography"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Stenography",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Stenography
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Domestic Chores"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Domestic Chores",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Domestic Chores
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Painter/Artist"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Painter/Artist",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Painter/Artist
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Tailoring"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Tailoring",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Tailoring
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Driving"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Driving",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Driving
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input
                                    class="form-check-input osawft local_preferred_work_location border-light-emphasis"
                                    type="checkbox"
                                    name="osawft"
                                    id="osawft"
                                    value="Painting Jobs"

                                    onChange={(e) =>
                                        handleOtherSkill(
                                            "Painting Jobs",e
                                        )
                                    }
                                />
                                <label
                                    class="form-check-label !text-xs !py-2.5 !text-gray-500"
                                    for="osawft"
                                >
                                    Painting Jobs
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input
                                type="input"
                                placeholder="Others: "
                                class="form-control osawft-others !text-xs !py-2.5 !text-gray-500 border-light-emphasis"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
