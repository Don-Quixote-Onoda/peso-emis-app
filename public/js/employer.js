$('.disability').on('change', function() {
    if ($(this).val() == 4) {
        $(this).after("<input type='text' placeholder='Please specifiy here...' class='form-control disability-others mt-2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis'\
                                    id='inputEmail4'>");

    } else {
        $(this).next().remove();
    }
});

$('.employed').on('change', function() {
    if ($('.employed').is(':checked')) {
        $('.employed-status').removeClass('d-none');
        if (!$('.unemployed-status').hasClass('d-none')) {
            $('.unemployed-status').addClass('d-none');
        }
    }
});

$('.unemployed').on('change', function() {
    if ($('.unemployed').is(':checked')) {
        $('.unemployed-status').removeClass('d-none');
        if (!$('.employed-status').hasClass('d-none')) {
            $('.employed-status').addClass('d-none');
        }
    }
});



$('.yes_actively_looking_for_work').on('change', function() {
    if ($('.yes_actively_looking_for_work').is(':checked')) {
        $('.is_actively_looking_for_work').removeClass('d-none');
    }
});

$('.not_actively_looking_for_work').on('change', function() {
    if ($('.not_actively_looking_for_work').is(':checked')) {
        $('.is_actively_looking_for_work').addClass('d-none');
    }
});

$('.yes_when_to_work').on('change', function() {
    if ($('.yes_when_to_work').is(':checked')) {
        $('.is_not_when_to_work').addClass('d-none');
    }
});

$('.no_when_to_work').on('change', function() {
    if ($('.no_when_to_work').is(':checked')) {
        $('.is_not_when_to_work').removeClass('d-none');
    }
});

$('.yes_4ps_beneficiary').on('change', function() {
    if ($('.yes_4ps_beneficiary').is(':checked')) {
        $('.is_4ps_beneficiary').removeClass('d-none');
    }
});

$('.no_4ps_beneficiary').on('change', function() {
    if ($('.no_4ps_beneficiary').is(':checked')) {
        $('.is_4ps_beneficiary').addClass('d-none');
    }
});

$('.unemployed-status-select').on('change', function() {
    if ($(this).val() == 7) {
        $(this).after("<input type='text' placeholder='Please specifiy here...' class='form-control mt-2 !text-xs !py-2.5 !text-gray-500 border-light-emphasis'\
                                    id='inputEmail4'>");
    } else {
        $(this).next().remove();
    }

});

$('.local_preferred_work_location').on('change', function() {
    if ($(this).is(':checked')) {
        $('.islocal_preferred_work_location').removeAttr('disabled');
    }

});

$('.overseas_preferred_work_location').on('change', function() {
    if ($(this).is(':checked')) {
        $('.isoverseas_preferred_work_location').removeAttr('disabled');
    }

});

var my_handlers = {

    fill_pob_provinces: function() {

        var region_code = $(this).val();
        $('.pob_province').ph_locations('fetch_list', [{
            "region_code": region_code
        }]);
    },

    fill_pob_cities: function() {

        var province_code = $(this).val();
        $('.pob_city').ph_locations('fetch_list', [{
            "province_code": province_code
        }]);
    },


    fill_pob_barangays: function() {

        var city_code = $(this).val();
        $('.pob_barangay').ph_locations('fetch_list', [{
            "city_code": city_code
        }]);
    },

    fill_pa_provinces: function() {

        var region_code = $(this).val();
        $('.pob_province').ph_locations('fetch_list', [{
            "region_code": region_code
        }]);
    },

    fill_pa_cities: function() {

        var province_code = $(this).val();
        $('.pa_city').ph_locations('fetch_list', [{
            "province_code": province_code
        }]);
    },


    fill_pa_barangays: function() {

        var city_code = $(this).val();
        $('.pa_barangay').ph_locations('fetch_list', [{
            "city_code": city_code
        }]);
    }
};

$(function() {
    $('.pob_province').on('change', my_handlers.fill_pob_cities);
    $('.pob_city').on('change', my_handlers.fill_pob_barangays);

    $('.pob_province').ph_locations({
        'location_type': 'provinces'
    });
    $('.pob_city').ph_locations({
        'location_type': 'cities'
    });
    $('.pob_barangay').ph_locations({
        'location_type': 'barangays'
    });

    $('.pob_province').ph_locations('fetch_list');

    $('.pa_province').on('change', my_handlers.fill_pa_cities);
    $('.pa_city').on('change', my_handlers.fill_pa_barangays);

    $('.pa_province').ph_locations({
        'location_type': 'provinces'
    });
    $('.pa_city').ph_locations({
        'location_type': 'cities'
    });
    $('.pa_barangay').ph_locations({
        'location_type': 'barangays'
    });

    $('.pa_province').ph_locations('fetch_list');

});

var count = 1;
// counter
var counter = () => {
    switch (count) {
        case 1:
            $('.button-1').removeClass('d-none');
            $('.button-1').addClass('d-block');
            $('.next-button').removeClass('d-none');
            $('.next-button').addClass('d-flex');
            $('.prev-button').addClass('d-none');
            $('.submit-button').addClass('d-none');
            $('.step-1').removeClass('d-none');
            $('.step-1').addClass('d-block');
            $('.step-2').addClass('d-none');
            $('.step-3').addClass('d-none');
            $('.step-4').addClass('d-none');
            $('.step-5').addClass('d-none');
            $('.nav-1').removeClass('!text-gray-400');
            $('.nav-1').addClass('text-pink-400');
            $('.nav-2').addClass('!text-gray-400');
            $('.nav-3').addClass('!text-gray-400');
            $('.nav-4').addClass('!text-gray-400');
            $('.nav-5').addClass('!text-gray-400');
            $('.counter-1').removeClass('!text-gray-500');
            $('.counter-1').addClass('text-pink-500');
            $('.counter-1').attr('style', 'border-color: rgb(236 72 153 / var(--tw-text-opacity)) !important;');
            $('.counter-2').addClass('!text-gray-500');
            $('.counter-2').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-3').addClass('!text-gray-500');
            $('.counter-3').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-4').addClass('!text-gray-500');
            $('.counter-4').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-5').addClass('!text-gray-500');
            $('.counter-5').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            break;
        
        case 2:
            $('.button-1').removeClass('d-block');
            $('.button-1').addClass('d-none');
            $('.next-button').addClass('d-flex');
            $('.prev-button').removeClass('d-none');
            $('.prev-button').addClass('d-flex');
            $('.submit-button').addClass('d-none');
            $('.step-1').removeClass('d-block');
            $('.step-1').addClass('d-none');
            $('.step-2').removeClass('d-none');
            $('.step-2').addClass('d-block');
            $('.step-3').addClass('d-none');
            $('.step-4').addClass('d-none');
            $('.step-5').addClass('d-none');
            $('.nav-1').removeClass('text-pink-400');
            $('.nav-1').addClass('!text-gray-400');
            $('.nav-2').removeClass('!text-gray-400');
            $('.nav-2').addClass('text-pink-400');
            $('.nav-3').addClass('!text-gray-400');
            $('.nav-4').addClass('!text-gray-400');
            $('.nav-5').addClass('!text-gray-400');
            $('.counter-1').removeClass('text-pink-500');
            $('.counter-1').addClass('!text-gray-500');
            $('.counter-1').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-2').removeClass('!text-gray-500');
            $('.counter-2').addClass('text-pink-500');
            $('.counter-2').attr('style', 'border-color: rgb(236 72 153 / var(--tw-text-opacity)) !important;');
            $('.counter-3').addClass('!text-gray-500');
            $('.counter-3').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-4').addClass('!text-gray-500');
            $('.counter-4').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-5').addClass('!text-gray-500');
            $('.counter-5').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            break;
        case 3:
            $('.button-1').removeClass('d-block');
            $('.button-1').addClass('d-none');
            $('.next-button').addClass('d-flex');
            $('.prev-button').removeClass('d-none');
            $('.prev-button').addClass('d-flex');
            $('.submit-button').addClass('d-none');
            $('.step-1').removeClass('d-block');
            $('.step-1').addClass('d-none');
            $('.step-2').removeClass('d-block');
            $('.step-2').addClass('d-none');
            $('.step-3').removeClass('d-none');
            $('.step-3').addClass('d-block');
            $('.step-4').addClass('d-none');
            $('.step-5').addClass('d-none');
            $('.nav-1').removeClass('text-pink-400');
            $('.nav-1').addClass('!text-gray-400');
            $('.nav-2').removeClass('text-pink-400');
            $('.nav-2').addClass('!text-gray-400');
            $('.nav-3').removeClass('!text-gray-400');
            $('.nav-3').addClass('text-pink-400');
            $('.nav-4').addClass('!text-gray-400');
            $('.nav-5').addClass('!text-gray-400');
            $('.counter-1').removeClass('text-pink-500');
            $('.counter-1').addClass('!text-gray-500');
            $('.counter-1').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-2').removeClass('text-pink-500');
            $('.counter-2').addClass('!text-gray-500');
            $('.counter-2').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-3').removeClass('!text-gray-500');
            $('.counter-3').addClass('text-pink-500');
            $('.counter-3').attr('style', 'border-color: rgb(236 72 153 / var(--tw-text-opacity)) !important;');
            $('.counter-4').addClass('!text-gray-500');
            $('.counter-4').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-5').addClass('!text-gray-500');
            $('.counter-5').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            break;
        case 4:
            $('.button-1').removeClass('d-block');
            $('.button-1').addClass('d-none');
            $('.next-button').addClass('d-flex');
            $('.prev-button').removeClass('d-none');
            $('.prev-button').addClass('d-flex');
            $('.submit-button').addClass('d-none');
            $('.step-1').removeClass('d-block');
            $('.step-1').addClass('d-none');
            $('.step-2').removeClass('d-block');
            $('.step-2').addClass('d-none');
            $('.step-3').removeClass('d-block');
            $('.step-3').addClass('d-none');
            $('.step-4').removeClass('d-none');
            $('.step-4').addClass('d-block');
            $('.step-5').addClass('d-none');
            $('.nav-1').removeClass('text-pink-400');
            $('.nav-1').addClass('!text-gray-400');
            $('.nav-2').removeClass('text-pink-400');
            $('.nav-2').addClass('!text-gray-400');
            $('.nav-3').removeClass('text-pink-400');
            $('.nav-3').addClass('!text-gray-400');
            $('.nav-4').removeClass('!text-gray-400');
            $('.nav-4').addClass('text-pink-400');
            $('.nav-5').addClass('!text-gray-400');
            $('.counter-1').removeClass('text-pink-500');
            $('.counter-1').addClass('!text-gray-500');
            $('.counter-1').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-2').removeClass('text-pink-500');
            $('.counter-2').addClass('!text-gray-500');
            $('.counter-2').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-3').removeClass('text-pink-500');
            $('.counter-3').addClass('!text-gray-500');
            $('.counter-3').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            $('.counter-4').removeClass('!text-gray-500');
            $('.counter-4').addClass('text-pink-500');
            $('.counter-4').attr('style', 'border-color: rgb(236 72 153 / var(--tw-text-opacity)) !important;');
            $('.counter-5').addClass('!text-gray-500');
            $('.counter-5').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
            break;
        case 5:
        $('.button-1').removeClass('d-block');
        $('.button-1').addClass('d-none');
        $('.next-button').removeClass('d-flex');
        $('.next-button').addClass('d-none');
        $('.prev-button').removeClass('d-none');
        $('.prev-button').addClass('d-flex');
        $('.submit-button').removeClass('d-none');
        $('.submit-button').addClass('d-block');
        $('.step-1').removeClass('d-block');
        $('.step-1').addClass('d-none');
        $('.step-2').removeClass('d-block');
        $('.step-2').addClass('d-none');
        $('.step-3').removeClass('d-block');
        $('.step-3').addClass('d-none');
        $('.step-4').removeClass('d-block');
        $('.step-4').addClass('d-none');
        $('.step-5').removeClass('d-none');
        $('.step-5').addClass('d-block');
        $('.nav-1').removeClass('text-pink-400');
        $('.nav-1').addClass('!text-gray-400');
        $('.nav-2').removeClass('text-pink-400');
        $('.nav-2').addClass('!text-gray-400');
        $('.nav-3').removeClass('text-pink-400');
        $('.nav-3').addClass('!text-gray-400');
        $('.nav-4').removeClass('text-pink-400');
        $('.nav-4').addClass('!text-gray-400');
        $('.nav-5').removeClass('!text-gray-400');
        $('.nav-5').addClass('text-pink-400');
        $('.counter-1').removeClass('text-pink-500');
        $('.counter-1').addClass('!text-gray-500');
        $('.counter-1').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
        $('.counter-2').removeClass('text-pink-500');
        $('.counter-2').addClass('!text-gray-500');
        $('.counter-2').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
        $('.counter-3').removeClass('text-pink-500');
        $('.counter-3').addClass('!text-gray-500');
        $('.counter-3').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
        $('.counter-4').removeClass('text-pink-500');
        $('.counter-4').addClass('!text-gray-500');
        $('.counter-4').attr('style', 'border-color: rgb(156 163 175 / var(--tw-text-opacity)) !important;');
        $('.counter-5').removeClass('!text-gray-500');
        $('.counter-5').addClass('text-pink-500');
        $('.counter-5').attr('style', 'border-color: rgb(236 72 153 / var(--tw-text-opacity)) !important;');
        break;
        default:
            break;
    }

    console.log(count);
}

counter();

$('.next-button').on('click', function() {
    
    switch (count) {
        case 1:
            validate_step_1();
            break;
        case 2:
            validate_step_2();
            break;
        case 3:
            validate_step_3();
            break;
        case 4:
            validate_step_4();
            break;
        default:
            break;
    }
});

$('.prev-button').on('click', function() {
    count--;
    counter();
});

$('.submit-button').on('click', function() {
    if(count == 5) {
        submit_form();
    }
});

var validate_step_1 = () => {
    var data = {
        "establishment_name" : $('.establishment-name').val(),
        "establishment_accronym": $('.establishment-abbr').val(),
        "TIN_number": $('.establishment-id-number').val(),
        "employer_type": $('input[name="employer-type"]:checked').val(),
        "total_work_force": $('input[name="total-worked-force"]:checked').val(),
        "line_of_bir": $('.line-of-bir').val(),
        "address": $('.pa_address').val(),
        "barangay": $('.pa_barangay :selected').text(),
        "city_or_municipality": $('.pa_city :selected').text(),
        "province": $('.pa_province :selected').text(),
    };

    console.log(data);

    $.ajax({
        type: 'POST',
        url: "/api/v2/validator/step-1",
        data: data,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if(response.status == 400) {
                if(typeof response.errors.establishment_name !== 'undefined') {
                    $.each(response.errors.establishment_name, function(key, err_values) {
                        $('.establishment-name-error').text(err_values);
                    });
                }

                if(typeof response.errors.establishment_accronym !== 'undefined') {
                    $.each(response.errors.establishment_accronym, function(key, err_values) {
                        $('.establishment-abbr-error').text(err_values);
                    });
                }

                if(typeof response.errors.TIN_number !== 'undefined') {
                    $.each(response.errors.TIN_number, function(key, err_values) {
                        $('.establishment-id-number-error').text(err_values);
                    });
                }

                if(typeof response.errors.employer_type !== 'undefined') {
                    $.each(response.errors.employer_type, function(key, err_values) {
                        $('.establishment-employer-type-error').text(err_values);
                    });
                }

                if(typeof response.errors.total_work_force !== 'undefined') {
                    $.each(response.errors.total_work_force, function(key, err_values) {
                        $('.establishment-total-worked-force-error').text(err_values);
                    });
                }

                if(typeof response.errors.line_of_bir !== 'undefined') {
                    $.each(response.errors.line_of_bir, function(key, err_values) {
                        $('.line-of-bir-error').text(err_values);
                    });
                }

                if(typeof response.errors.address !== 'undefined') {
                    $.each(response.errors.address, function(key, err_values) {
                        $('.pa_address-error').text(err_values);
                    });
                }

                if(typeof response.errors.barangay !== 'undefined') {
                    $.each(response.errors.barangay, function(key, err_values) {
                        $('.pa_barangay-error').text(err_values);
                    });
                }

                if(typeof response.errors.city_or_municipality !== 'undefined') {
                    $.each(response.errors.city_or_municipality, function(key, err_values) {
                        $('.pa_city-error').text(err_values);
                    });
                }

                if(typeof response.errors.province !== 'undefined') {
                    $.each(response.errors.province, function(key, err_values) {
                        $('.pa_province-error').text(err_values);
                    });
                }
            }
            else {
                count++;
                counter();
            }
        }
    });
}

var validate_step_2 =() => {
    var data = {
        "title": $('input[name="title"]:checked').val(),
        "fullname": $('.contact-person').val(),
        "position": $('.contact-person-position').val(),
        "telephone_number": $('.contact-person-telephone').val(),
        "mobile_number": $('.contact-person-mobile').val(),
        "fax_number": $('.contact-person-fax').val(),
        "email_address": $('.contact-person-email').val(),
    };

    console.log(data);

    $.ajax({
        type: 'POST',
        url: "/api/v2/validator/step-2",
        data: data,
        dataType: 'json',
        success: function(response) {
            console.log(response);

            if(response.status == 400) {
                $('.title-error').text('');
                $('.contact-person-error').text('');
                $('.contact-person-position-error').text('');
                $('.contact-person-telephone-error').text('');
                $('.contact-person-mobile-error').text('');
                $('.contact-person-fax-error').text('');
                $('.contact-person-fax-error').text('');

                if(typeof response.errors.title !== 'undefined') {
                    $.each(response.errors.title, function(key, err_values) {
                        $('.title-error').text(err_values);
                    });
                }

                if(typeof response.errors.fullname !== 'undefined') {
                    $.each(response.errors.fullname, function(key, err_values) {
                        $('.contact-person-error').text(err_values);
                    });
                }

                if(typeof response.errors.position !== 'undefined') {
                    $.each(response.errors.position, function(key, err_values) {
                        $('.contact-person-position-error').text(err_values);
                    });
                }

                if(typeof response.errors.telephone_number !== 'undefined') {
                    $.each(response.errors.telephone_number, function(key, err_values) {
                        $('.contact-person-telephone-error').text(err_values);
                    });
                }

                if(typeof response.errors.mobile_number !== 'undefined') {
                    $.each(response.errors.mobile_number, function(key, err_values) {
                        $('.contact-person-mobile-error').text(err_values);
                    });
                }

                if(typeof response.errors.fax_number !== 'undefined') {
                    $.each(response.errors.fax_number, function(key, err_values) {
                        $('.contact-person-fax-error').text(err_values);
                    });
                }

                if(typeof response.errors.email_address !== 'undefined') {
                    $.each(response.errors.email_address, function(key, err_values) {
                        $('.contact-person-email-error').text(err_values);
                    });
                }
            }
            else {
                count++;
                counter();
            }
        }
    });
}

var validate_step_3 =() => {
    var vacancy_nature_of_work = $('input[name="vacancy-nature-of-work[]"]:checked');
    var vnow = '';

    vacancy_nature_of_work.each(function() {
        vnow += $(this).val() + ', ';
    });

    var data = {
        "position_title": $('.vacancy-title').val(),
        "nature_of_work": vnow,
        "job_description": $('.vacancy-job-description').val(),
        "place_of_work": $('.vacancy-place-of-work').val(),
        "salary": $('.vacancy-salary').val(),
        "vacancy_count": $('.vacancy-count').val(),
    };

    $.ajax({
        type: 'POST',
        url: "/api/v2/validator/step-3",
        data: data,
        dataType: 'json',
        success: function(response) {

            if(response.status == 400) {
                $('.vacancy-title-error').text('');
                $('.vacancy-job-description-error').text('');
                $('.vacancy-nature-of-work-error').text('');
                $('.vacancy-place-of-work-error').text('');
                $('.vacancy-salary-error').text('');
                $('.vacancy-count-error').text('');

                if(typeof response.errors.position_title !== 'undefined') {
                    $.each(response.errors.position_title, function(key, err_values) {
                        $('.vacancy-title-error').text(err_values);
                    });
                }

                if(typeof response.errors.job_description !== 'undefined') {
                    $.each(response.errors.job_description, function(key, err_values) {
                        $('.vacancy-job-description-error').text(err_values);
                    });
                }

                if(typeof response.errors.nature_of_work !== 'undefined') {
                    $.each(response.errors.nature_of_work, function(key, err_values) {
                        $('.vacancy-nature-of-work-error').text(err_values);
                    });
                }

                if(typeof response.errors.place_of_work !== 'undefined') {
                    $.each(response.errors.place_of_work, function(key, err_values) {
                        $('.vacancy-place-of-work-error').text(err_values);
                    });
                }

                if(typeof response.errors.salary !== 'undefined') {
                    $.each(response.errors.salary, function(key, err_values) {
                        $('.vacancy-salary-error').text(err_values);
                    });
                }

                if(typeof response.errors.vacancy_count !== 'undefined') {
                    $.each(response.errors.vacancy_count, function(key, err_values) {
                        $('.vacancy-count-error').text(err_values);
                    });
                }
            }
            else {
                count++;
                counter();
            }
        }
    });
}

var validate_step_4 =() => {
    var disability_type = $('input[name="qualification_accept_disability_yes[]"]:checked');
    var disability_type_text = '';


    disability_type.each(function() {
        disability_type_text += $(this).val() + ', ';
    });

    disability_type_text += $('.qualification_accept_disability_yes_others').val();

    var qnof = $('input[name="qnof"]:checked');
    var qnof_text = '';


    qnof.each(function() {
        qnof_text += $(this).val() + ', ';
    });


    var data = {
        'work_of_experience': $('.qualification-work-experience').val(),
        'sex': $('input[name="qualification_sex"]:checked').val(),
        'religion': $('.qualification-religion').val(),
        'civil_status': $('input[name="qualification_civil_status"]:checked').val(),
        'is_accept_disability': $('input[name="qualification_accept_disability"]:checked').val(),
        'disability_type': disability_type_text,
        'educational_level': $('.qualification-educational-level').val(),
        'course_or_major': $('.qualification-course').val(),
        'license': $('.qualification-license').val(),
        'eligibility': $('.qualification-eligibility').val(),
        'certification': $('.qualification-certification').val(),
        'language_or_dialect': $('.qualification-languange-spoken').val(),
        'preferred_residence': $('.qualification-preffered-residence').val(),
        'other_qualification': $('.other-qualification').val(),
        'nature_of_work': qnof_text,
    }

    $.ajax({
        type: 'POST',
        url: "/api/v2/validator/step-4",
        data: data,
        dataType: 'json',
        success: function(response) {
            $('.qualification-work-experience-error').text('');
            $('.qualification_sex-error').text('');
            $('.qualification-religion-error').text('');
            $('.qualification_civil_status-error').text('');
            $('.qualification_accept_disability-error').text('');
            $('.qualification_accept_disability-type-error').text('');
            $('.qualification-educational-level-error').text('');
            $('.qualification-course-error').text('');
            $('.qualification-license-error').text('');
            $('.qualification-eligibility-error').text('');
            $('.qualification-certification-error').text('');
            $('.qualification-languange-spoken-error').text('');
            $('.qualification-preffered-residence-error').text('');
            $('.other-qualification-error').text('');
            $('.qnof-error').text('');


            if(response.status == 400) {

                if(typeof response.errors.work_of_experience !== 'undefined') {
                    $.each(response.errors.work_of_experience, function(key, err_values) {
                        $('.qualification-work-experience-error').text(err_values);
                    });
                }

                if(typeof response.errors.sex !== 'undefined') {
                    $.each(response.errors.sex, function(key, err_values) {
                        $('.qualification_sex-error').text(err_values);
                    });
                }

                if(typeof response.errors.religion !== 'undefined') {
                    $.each(response.errors.religion, function(key, err_values) {
                        $('.qualification-religion-error').text(err_values);
                    });
                }

                if(typeof response.errors.civil_status !== 'undefined') {
                    $.each(response.errors.civil_status, function(key, err_values) {
                        $('.qualification_civil_status-error').text(err_values);
                    });
                }

                if(typeof response.errors.is_accept_disability !== 'undefined') {
                    $.each(response.errors.is_accept_disability, function(key, err_values) {
                        $('.qualification_accept_disability-error').text(err_values);
                    });
                }

                if(typeof response.errors.disability_type !== 'undefined') {
                    $.each(response.errors.disability_type, function(key, err_values) {
                        $('.qualification_accept_disability-type-error').text(err_values);
                    });
                }

                if(typeof response.errors.educational_level !== 'undefined') {
                    $.each(response.errors.educational_level, function(key, err_values) {
                        $('.qualification-educational-level-error').text(err_values);
                    });
                }

                if(typeof response.errors.course_or_major !== 'undefined') {
                    $.each(response.errors.course_or_major, function(key, err_values) {
                        $('.qualification-course-error').text(err_values);
                    });
                }

                if(typeof response.errors.license !== 'undefined') {
                    $.each(response.errors.license, function(key, err_values) {
                        $('.qualification-license-error').text(err_values);
                    });
                }

                if(typeof response.errors.eligibility !== 'undefined') {
                    $.each(response.errors.eligibility, function(key, err_values) {
                        $('.qualification-eligibility-error').text(err_values);
                    });
                }

                if(typeof response.errors.certification !== 'undefined') {
                    $.each(response.errors.certification, function(key, err_values) {
                        $('.qualification-certification-error').text(err_values);
                    });
                }

                if(typeof response.errors.language_or_dialect !== 'undefined') {
                    $.each(response.errors.language_or_dialect, function(key, err_values) {
                        $('.qualification-languange-spoken-error').text(err_values);
                    });
                }

                if(typeof response.errors.preferred_residence !== 'undefined') {
                    $.each(response.errors.preferred_residence, function(key, err_values) {
                        $('.qualification-preffered-residence-error').text(err_values);
                    });
                }

                if(typeof response.errors.other_qualification !== 'undefined') {
                    $.each(response.errors.other_qualification, function(key, err_values) {
                        $('.other-qualification-error').text(err_values);
                    });
                }

                if(typeof response.errors.nature_of_work !== 'undefined') {
                    $.each(response.errors.nature_of_work, function(key, err_values) {
                        $('.qnof-error').text(err_values);
                    });
                }
            }
            else {
                count++;
                counter();
            }
        }
    });
}


var submit_form = () => {
    var vacancy_nature_of_work = $('input[name="vacancy-nature-of-work[]"]:checked');
    var vnow = '';

    vacancy_nature_of_work.each(function() {
        vnow += $(this).val() + ', ';
    });

    var disability_type = $('input[name="qualification_accept_disability_yes[]"]:checked');
    var disability_type_text = '';


    disability_type.each(function() {
        disability_type_text += $(this).val() + ', ';
    });

    disability_type_text += $('.qualification_accept_disability_yes_others').val();

    var qnof = $('input[name="qnof"]:checked');
    var qnof_text = '';


    qnof.each(function() {
        qnof_text += $(this).val() + ', ';
    });

    var data = {
        "establishment_name" : $('.establishment-name').val(),
        "establishment_accronym": $('.establishment-abbr').val(),
        "TIN_number": $('.establishment-id-number').val(),
        "employer_type": $('input[name="employer-type"]:checked').val(),
        "total_work_force": $('input[name="total-worked-force"]:checked').val(),
        "line_of_bir": $('.line-of-bir').val(),
        "address": $('.pa_address').val(),
        "barangay": $('.pa_barangay :selected').text(),
        "city_or_municipality": $('.pa_city :selected').text(),
        "province": $('.pa_province :selected').text(),
        "title": $('input[name="title"]:checked').val(),
        "fullname": $('.contact-person').val(),
        "position": $('.contact-person-position').val(),
        "telephone_number": $('.contact-person-telephone').val(),
        "mobile_number": $('.contact-person-mobile').val(),
        "fax_number": $('.contact-person-fax').val(),
        "email_address": $('.contact-person-email').val(),
        "position_title": $('.vacancy-title').val(),
        "nature_of_work": vnow,
        "job_description": $('.vacancy-job-description').val(),
        "place_of_work": $('.vacancy-place-of-work').val(),
        "salary": $('.vacancy-salary').val(),
        "vacancy_count": $('.vacancy-count').val(),
        'work_of_experience': $('.qualification-work-experience').val(),
        'sex': $('input[name="qualification_sex"]:checked').val(),
        'religion': $('.qualification-religion').val(),
        'civil_status': $('input[name="qualification_civil_status"]:checked').val(),
        'is_accept_disability': $('input[name="qualification_accept_disability"]:checked').val(),
        'disability_type': disability_type_text,
        'educational_level': $('.qualification-educational-level').val(),
        'course_or_major': $('.qualification-course').val(),
        'license': $('.qualification-license').val(),
        'eligibility': $('.qualification-eligibility').val(),
        'certification': $('.qualification-certification').val(),
        'language_or_dialect': $('.qualification-languange-spoken').val(),
        'preferred_residence': $('.qualification-preffered-residence').val(),
        'other_qualification': $('.other-qualification').val(),
        'nature_of_work': qnof_text,
        'posting_date' : $('.posting-details-date').val(),
        'valid_until' : $('.posting-details-valid-until').val(),
        'e_signature' : $('#formFile').val(),
    };

    console.log(data);

    $.ajax({
        type: 'POST',
        url: "/api/v2/employer/",
        data: data,
        dataType: 'json',
        success: function(response) {

            console.log(response);
            // $('.posting-details-date-error').text('');
            if(response.status == 400) {

                // if(typeof response.errors.posting_date !== 'undefined') {
                //     $.each(response.errors.posting_date, function(key, err_values) {
                //         $('.posting-details-date-error').text(err_values);
                //     });
                // }

                // if(typeof response.errors.valid_until !== 'undefined') {
                //     $.each(response.errors.valid_until, function(key, err_values) {
                //         $('.posting-details-valid-until-error').text(err_values);
                //     });
                // }

                // if(typeof response.errors.e_signature !== 'undefined') {
                //     $.each(response.errors.e_signature, function(key, err_values) {
                //         $('.upload-employer-signature-error').text(err_values);
                //     });
                // }

            }
            else {
                history.back();
            }
        }
    });
}