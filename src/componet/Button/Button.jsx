import '../Button/button.css'
import {validateNumber, getBirthYear, getGender} from 'nic-no-sri-lanka'

export default function Button ({submit}) {

    return (
        <>
        <button onClick={submit}>SUBMIT</button>
        </>
    )
}