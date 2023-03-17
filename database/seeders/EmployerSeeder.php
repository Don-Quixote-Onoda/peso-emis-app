<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employer;

class EmployerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employer = Employer::create([
            "establishment_name" => 'Brightlocal',
            "establishment_accronym" => 'BL',
            "TIN_number" => '3804-3423',
            "employer_type" => 'Recruitment & Placement Agency',
            "total_work_force" => 'Medium (100-199) ',
            "line_of_business" => 'Test',
            "e_signature" => 'brightlocal_esignature.png',
            "is_authorization_accepted" => 1
        ]);

        $employer->employer_address()->create([
            "address" => '2nd floor unknown building',
            "barangay" => 'Poblacion',
            "city_or_municipality" => 'valencia city',
            "province" => 'bukidnon',
            "employer_id" => 1
        ]);

        $employer->employer_establishment_contact_detail()->create([
            "title" => "Miss",
            "fullname" => "Jane Doe",
            "position" => "President",
            "telephone_number" => "N/A",
            "mobile_number" => "084354354",
            "fax_number" => "N/A",
            "email_address" => "janedoe@email.com",
            "employer_id" => 1
        ]);

        $employer->employer_posting_detail()->create([
            "posting_date" => '2022-02-04',
            "valid_until" => '2022-04-03',
            "employer_id" => 1
        ]);

        $employer->employer_qualification_requirement()->create([
            "work_of_experience" => '12months',
            "sex" => 'male',
            "religion" => 'christian',
            "civil_status" => 'single',
            "is_accept_disability" => 'no',
            "disability_type" => 'N/A',
            "educational_level" => "college graduate",
            "course_or_major" => 'BSIT',
            "license" => "N/A",
            "eligibility" => "N/A",
            "certification" => "N/A",
            "language_or_dialect" => "English",
            "preferred_residence" => "valencia city",
            "nature_of_work" => "PESO",
            "other_qualification" => "PESO",
            "employer_id" => 1
        ]);

        $employer->employer_vacancy_detail()->create([
            "position_title" => "Citation Builder",
            "job_description" => "Part-time",
            "nature_of_work" => "Part-time",
            "place_of_work" => "valencia city",
            "salary" => "2000+",
            "vacancy_count" => "5 vacancts",
            "employer_id" => 1
        ]);

    }
}
