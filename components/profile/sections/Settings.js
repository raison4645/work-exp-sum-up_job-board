import { useState } from 'react';
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Radio } from '@mui/material';

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const onSave = () => {
    // TODO: Patch settings record to api
    setSaved(true)
  }

  const onEdit = () => {
    setSaved(false)
  }
  return (
    <div className={styles.profile_section}>
      <FormControl sx={{ width: 1, border: 1, borderColor: '#EFEFEF', p: 4, borderRadius: 0 }} component="fieldset" variant="standard" onChange={onEdit}>
        {/* <FormLabel sx={{mb: 2}}>Settings</FormLabel> */}
        <FormGroup>
          <h3>Consent to Receive</h3>
          <FormControlLabel
            control={
              <Checkbox name="newsletter_HKSTP" size='large' />
            }
            label="Newsletters from HKSTP"
          />
          <FormControlLabel
            control={
              <Checkbox  name="promotion_partner" size='large'/>
            }
            label="Materials from the business partners of HKSTP"
          />
          <FormControlLabel
            control={<Checkbox  name="receive_marketing_communciation" size='large' />}
            label="Marketing communciations from HKSTP"
          />
        </FormGroup>
        <FormGroup sx={{mt: 4, mb: 4}}>
          <h3>Acceptance of Terms and Conditions / Privacy Policy</h3>
          <FormControlLabel
            control={
              <Checkbox name="" size='large'/>
            }
            label="I understand and accpet the above terms & Conditions and Privacy Policy in using the service s provided in this website"
          />
        </FormGroup>
        {
          saved
            ? <button className={styles.disabled_btn} disabled><h5>SAVED</h5></button>
            : <button className={styles.save_settings} onClick={onSave}><h5>SAVE</h5></button>
        }
        </FormControl>

        <FormControl sx={{ width: 1, border: 1, borderColor: '#EFEFEF', p: 4, borderRadius: 0 }} component="fieldset" variant="standard">
          <FormGroup sx={{mt: 4, mb: 4}}>
            <h3>Delete Account</h3>
            <FormControlLabel
              control={ <Radio name="" /> }
              label="I also like to remove ONEPASS too"
            />
          </FormGroup>
          <button className={styles.delete_account_btn}><h5>DELETE</h5></button>
      </FormControl>
    </div>
  )
}
