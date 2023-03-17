<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Applicant;

class ApplicantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $applicant1 = Applicant::create([
            'surname' => 'Doe',
            'firstname' => 'John',
            'middlename' => "Bob",
            'suffix' => 'N/A',
            'birthdate' => '2000/04/02',
            'civil_status' => 'single',
            'height' => '170cm',
            'religion' => 'N/A',
            'sex' => 'Male',
            'email_address' => 'johndoe@email.com',
            'landline_number' => 'N/A',
            'phone_number' => '093234454',
            'disability' => 'N/A',
            'TIN_number' => '2890343',
            'GSIS_SSS_id' => '23894543',
            'pag_ibig_number' => '23894543',
            'philhealth_id' => '489345654',
            'is_actively_looking_for_work' => 1,
            'is_willing_to_work_immidiately' => 1,
            'find_job_duration' => '3months',
            'when_to_start_working' => '2023/01/30',
            'is_4Ps' => 1,
            'household_id_4ps' => '3489-23489',
            'expected_salary' => 20000,
            'passport_number' => '38023-3234',
            'expiry_date' => '2025/02/22',
            'skills_without_formal_training' => 'carpentry',
            'e_signature' => 'johndoe_signature.png',
            'is_authorization_accepted' => 1
        ]);

        $applicant1->applicant_address()->create([
            'address_type' => 0,
            'province' => 'bukidnon',
            'municipality_or_city' => 'valencia city',
            'barangay' => 'poblacion',
            'village' => 'juanilla village',
            'house_no_or_street' => 'N/A',
        ]);

        $applicant1->applicant_address()->create([
            'address_type' => 1,
            'province' => 'bukidnon',
            'municipality_or_city' => 'valencia city',
            'barangay' => 'poblacion',
            'village' => 'juanilla village',
            'house_no_or_street' => 'N/A',
        ]);

        $applicant1->applicant_educational_background()->create([
            'type' => 0,
            'school' => 'VCCS',
            'course' => 'N/A',
            'year_graduated' => 2011,
            'level' => 'completed',
            'year_last_attended' => 2011,
            'awards' => 'N/A',
        ]);

        $applicant1->applicant_educational_background()->create([
            'type' => 1,
            'school' => 'VNHS',
            'course' => 'N/A',
            'year_graduated' => 2016,
            'level' => 'completed',
            'year_last_attended' => 2016,
            'awards' => 'N/A',
        ]);

        $applicant1->applicant_educational_background()->create([
            'type' => 2,
            'school' => 'CMU SHS',
            'course' => 'STEM',
            'year_graduated' => 2018,
            'level' => 'completed',
            'year_last_attended' => 2018,
            'awards' => 'With Honors',
        ]);

        $applicant1->applicant_educational_background()->create([
            'type' => 0,
            'school' => 'CMU',
            'course' => 'BSIT',
            'year_graduated' => 2022,
            'level' => 'completed',
            'year_last_attended' => 2022,
            'awards' => 'Cum Laude',
        ]);

        $applicant1->applicant_eligibility()->create([
            'training_or_courses' => 'Computer Programming',
            'duration' => '6months',
            'instituition' => 'tesda',
            'certificates' => 'NCII',
        ]);

        $applicant1->applicant_eligibility()->create([
            'training_or_courses' => 'Computer System Servicing',
            'duration' => '6months',
            'instituition' => 'tesda',
            'certificates' => 'NCII',
        ]);

        $applicant1->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => 'Valencia City',
        ]);

        $applicant1->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => 'Cagayan De Oro City',
        ]);

        $applicant1->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => 'Davao City',
        ]);

        $applicant1->applicant_job_preference()->create([
            'occupation' => 'web developer'
        ]);

        $applicant1->applicant_job_preference()->create([
            'occupation' => 'Graphic Designer'
        ]);

        $applicant1->applicant_job_preference()->create([
            'occupation' => 'Web Designer'
        ]);

        $applicant1->applicant_language_spoken()->create([
            'language_spoken' => 'bisaya',
            'can_read' => 1,
            'can_write' => 1,
            'can_speak' => 1,
            'can_understand' => 1,
        ]);

        $applicant1->applicant_language_spoken()->create([
            'language_spoken' => 'filipino',
            'can_read' => 1,
            'can_write' => 1,
            'can_speak' => 1,
            'can_understand' => 1,
        ]);

        $applicant1->applicant_language_spoken()->create([
            'language_spoken' => 'english',
            'can_read' => 1,
            'can_write' => 1,
            'can_speak' => 1,
            'can_understand' => 1,
        ]);

        $applicant1->applicant_status()->create([
            'applicant_type' => 0,
            'applicant_status_type' => 'Wage Employed',
        ]);

        $applicant1->applicant_work_experience()->create([
            'company_name' => 'Brightlocal',
            'address' => 'valencia city',
            'position' => 'citation builder',
            'inclusive_date' => '2022/05/31',
            'status' => 'probationary',
        ]);

    }
}
