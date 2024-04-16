import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { setCookie } from "cookies-next";
import styles from "@/styles/components/apply/ApplyForm.module.scss";
import { Select, MenuItem, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import BaseModal from "../BaseModal";
import ManageCV from "../profile/sections/ManageCV";
import Image from 'next/image'

const demoCVList = [
  {
    fileName: 'cvforall.doc',
    cvName: 'CV for all positions',
  },
  {
    fileName: 'My-resume.doc',
    cvName: 'CV for accountant',
  },
  {
    fileName: 'Resume_2023-2024_MechanicalEngineer_senior_position.doc',
    cvName: 'CV for 2023-2024_MechanicalEngineer_senior_position',
  },
  {
    fileName: 'My-CV.pdf',
    cvName: 'CV for General',
  },
]
const skillList = ["html", "javaScript", "php", "C++", "Java"];
const languageList = [
    "English",
    "Chinese",
    "French",
    "German",
    "Japanese",
    "Korean",
  ];
const numRegex = new RegExp(/^[0-9]+$/);
const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

const CVUploadSection = ({ setToggleManageCV }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedCV, setSelectedCV] = useState('CV for all positions');

  return (
    <>
      <button
        type='button'
        onClick={() => setToggleManageCV(true)}
        className={styles.upload_btn}
      >
        Manage CV
      </button>

      <label>Upload Resumé</label>
      <div className={styles.cv_form}>
        {/* <input disabled value="cvforall.docx" /> */}
        <Select
          size='small'
          sx={{width: 1, borderRadius: 0}}
          defaultValue="CV for all positions"
          value={selectedCV}
          onChange={(evt) => setSelectedCV(evt.target.value)}
        >
          {demoCVList.map((cv, index) =>
            <MenuItem key={`${index}-${cv.fileName}`} value={cv.cvName}>
              {cv.cvName}
            </MenuItem>
          )}
        </Select>
        <BaseModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          height={400}
          width={500}
          content={<ManageCV setToggleModal={setToggleModal} demoCVList={demoCVList} />}
        />
      </div>
    </>
  )
}

const NameField = ({ register, errors }) => {
  return (
    <>
      <label>Name</label>
      <div className={styles.name_field}>
        <input
          {...register("firstname", {
            required: "name is required" /* client-side validations here */,
          })}
          placeholder="Firstname"
          disabled
        />
        <input
          {...register("surname", {
            required: "name is required" /* client-side validations here */,
          })}
          placeholder="Surname"
          disabled
        />
      </div>
      {errors.name?.type === "required" && <p>Name is required</p>}
    </>
  )
}

const ContactField = ({ register, errors }) => {
  return (
    <div className={styles.contact_field}>
      <div className={styles.email_field}>
        <label>Email</label>
        <input
          {...register("email", { required: true, pattern: emailRegex })}
          placeholder="Email"
          disabled
        />
        {errors.email?.type === "required" && (
          <p>email address is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p>invalid email address format</p>
        )}
      </div>
      <div className={styles.contact_no_container}>
        <label>Contact number</label>
        <div className={styles.contact_no_field}>
          <input className={styles.region_code} placeholder="+852" />
          <input
            {...register("contact_no", {
              required: true,
              pattern: numRegex,
            })}
            placeholder="Contact Number"
            className={styles.contact_no}
          />
          {errors.contact_no?.type === "required" && (
            <p>Contact number is required.</p>
          )}
          {errors.contact_no?.type === "pattern" && (
            <p>Contact number must be numeric.</p>
          )}
        </div>
      </div>
    </div>
  )
}

const AvailabilityField = ({ avalibility, setAvalibility }) => {
  return (
    <>
      <label>Availability</label>
      <Select
        sx={{height: 40, borderRadius: 0}}
        value={avalibility}
        onChange={(evt) => setAvalibility(evt.target.value)}
      >
        <MenuItem value={'immediate'}>Immediate</MenuItem>
        <MenuItem value={'1week'}>1 week</MenuItem>
        <MenuItem value={'1month'}>1 month</MenuItem>
      </Select>
    </>
  )
}

const SalaryField = ({ register, errors }) => {
  return (
    <>
      <label>
        Expected Annual Package
        {errors.expected_salary?.type === "pattern" && (
          <p>Salary must be numeric.</p>
        )}
      </label>
      <div className={styles.expected_salary}>
        <input
          {...register("currency")}
          className={styles.salary_currency}
          placeholder="HKD/USD"
        />
        <input
          {...register("expected_salary", { pattern: numRegex })}
          placeholder="Expected Annual Package: e.g: 240,000"
          className={styles.salary_amount}
        />
      </div>
    </>
  )
}

const SkillsField = ({ Controller, control }) => {
  return (
    <>
      <label>Skills</label>
      <Controller
        control={control}
        name="skills"
        onChange={([, data]) => data}
        render={({ field }) =>
          <Autocomplete
            {...field}
            multiple
            options={skillList}
            renderInput={(params) => <TextField {...params} fullWidth placeholder='e.g. html'/>}
            popupIcon={false}
            onChange={(evt, value) => field.onChange(value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                height: '5rem'
              }
            }}
          />
        }
      />
    </>
  )
}

const LangField = ({ Controller, control }) => {
  return (
    <>
      <label>Language</label>
      <Controller
        control={control}
        name="languages"
        onChange={([, data]) => data}
        render={({ field }) =>
        <Autocomplete
          {...field}
          size="small"
          multiple
          options={languageList}
          renderInput={(params) => <TextField {...params} fullWidth sx={{border: 0}} placeholder='e.g. English'/>}
          popupIcon={false}
          onChange={(evt, value) => field.onChange(value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              height: '5rem'
            }
          }}
        />
        }
      />
    </>
  )
}

export default function ApplyForm({ formCookie, setIsPreview, setToggleManageCV }) {
  //  *** TODO ***
  // 1. middleware tracks auth status, redirect to login page if it is not logged in
  // 2. get user's profile by getServerSideProps for filling the form default value
  // 3. client-side validations (mandate fields, word length limitation, patterns such as email, phone numbers)
  // 4. complete the "onSubmit" function
  const [avalibility, setAvalibility] = useState('immediate');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm(
    formCookie
      ? // use Cookie profile
        { defaultValues: formCookie }
      : // default user profile
        {
          defaultValues: {
            firstname: "Raison",
            surname: "Lee",
            email: "raison4644@gmail.com",
            contact_no: "65656565",
            avalibility: avalibility,
            currency: 'HKD',
            skills: [],
            languages: [],
          },
        });

  const onPreview = async (data) => {
    setCookie("form_data", JSON.stringify(data));
    setIsPreview(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onPreview)} className={styles.form_content}>
        <CVUploadSection setToggleManageCV={setToggleManageCV}/>
        <NameField register={register} errors={errors} />
        <ContactField register={register} errors={errors} />
        <AvailabilityField avalibility={avalibility} setAvalibility={setAvalibility} />
        <SalaryField register={register} errors={errors} />
        <SkillsField Controller={Controller} control={control}/>
        <LangField Controller={Controller} control={control}/>
        <button type="submit" className={styles.preview_btn}>
          <h5>Preview</h5>
          <Image src="/sample_img/svgicon/btnIcon/ic-arrow-ok.svg" width={24} height={24} />
        </button>
      </form>
    </>
  );
}