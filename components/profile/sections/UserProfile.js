import { useState, useEffect } from 'react'
import { getData } from '@/common/api';
import BasicInfo from "./BasicInfo"
import { Autocomplete, Select, MenuItem, TextField, Button, FormControl } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss'

export default function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({})
  // FIXME: skills and languages are hard coded,
  const skillList = ["html", "javaScript", "php", "C++", "Java"];
  const languageList = [
    "English",
    "Chinese",
    "French",
    "German",
    "Japanese",
    "Korean",
  ];
  // TODO: if regex vars exist and are re-used widely, store them independently
  const numRegex = new RegExp(/^[0-9]+$/);
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

  const getCandidate = async () => {
    // FIXME: instead of statically inputing the candidate id, use the auth token (TBC)
    const { data: profileData } = await getData('candidate', 1)
    setProfile(profileData)
  }

  const onSubmit = async () => {
    // TODO: Edit the profile data in api by Put Method
    setIsEditing(false)
  }
  useEffect(() => {
    getCandidate();
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const NameRow = ({ register, errors }) => {
    return (
      <div className={styles.name_row}>
        <div>
          <label>First Name</label>
          <input
            {...register("firstname", {
              required: "name is required" /* client-side validations here */,
            })}
            placeholder="John"
            disabled
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            {...register("surname", {
              required: "name is required" /* client-side validations here */,
            })}
            placeholder="Chan"
            disabled
          />
        </div>
        <div>
          <label>Chinese Name</label>
          <input
            {...register("chinese_name", {
              required: "name is required" /* client-side validations here */,
            })}
            placeholder="陳大文"
            disabled
          />
        </div>
        {errors.name?.type === "required" && <p>Name is required</p>}
      </div>
    )
  }

  const ContactRow = ({ register, errors }) => {
    return (
      <div className={styles.contact_row}>
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

  const AvailabilityRow = ({ avalibility, setAvalibility }) => {
    return (
      <div className={styles.available_row}>
        <FormControl sx={{ width: 1, border: 0}}>
          <label>Availability</label>
          <Select sx={{height: 80, borderRadius: 0}}
            value={avalibility}
            // onChange={(evt) => setAvalibility(evt.target.value)}
          >
            <MenuItem value={'immediate'}>Immediate</MenuItem>
            <MenuItem value={'1week'}>1 week</MenuItem>
            <MenuItem value={'1month'}>1 month</MenuItem>
          </Select>
        </FormControl>

        <div>
        <label>Expected Annual Package</label>
        <div className={styles.expected_salary}>
          <input
            {...register("currency")}
            className={styles.salary_currency}
            placeholder="HKD"
          />
          <input
            {...register("expected_salary", { pattern: numRegex })}
            placeholder="e.g: 240,000"
            className={styles.salary_amount}
          />
          {errors.expected_salary?.type === "pattern" && (
            <p>Salary must be numeric.</p>
          )}
        </div>
      </div>
      </div>
    )
  }

  const SkillsRow = ({ Controller, control }) => {
    return (
      <div className={styles.skills_row}>
        <div>
          <label>Skills</label>
          <Controller
            control={control}
            name="skills"
            onChange={([, data]) => data}
            render={({ field }) =>
              <Autocomplete
                size="small"
                {...field}
                multiple
                options={skillList}
                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" placeholder='e.g. html'/>}
                popupIcon={false}
                onChange={(evt, value) => field.onChange(value)}
              />
            }
          />
        </div>

        <div>
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
            />
            }
          />
        </div>
      </div>
    )
  }

  const SectorRow = ({ Controller, control }) => {
    return (
      <></>
    )
  }

  return (
    <div className={styles.profile_section}>
      {
        isEditing
          ?
          <form onSubmit={onsubmit} className={styles.profile_form}>
            <NameRow register={register} errors={errors} />
            <ContactRow register={register} errors={errors} />
            <AvailabilityRow register={register} errors={errors} />
            <SkillsRow Controller={Controller} control={control}/>
            <SectorRow Controller={Controller} control={control}/>
            <button className={styles.save_profile_btn} onClick={onSubmit}>
              <h5>SAVE</h5>
            </button>
          </form>
          :
          <BasicInfo profile={profile} user={user} setIsEditing={setIsEditing}/>
      }
    </div>
  )
}
