import {useState} from "react";

export default function InputComponent() {

    const [inputText, setText] = useState('Hello')

    const [form, setForm] = useState({
        firstName: 'firstName',
        lastName: 'lastName',
        emailId: 'emailId'
    })

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <div>
                <input value={inputText} onChange={handleChange}/>
                <p>You have typed: {inputText}</p>
                <button onClick=
                            {
                                () => setText('Hello')
                            }>
                    Reset
                </button>
            </div>
            <div>
                <input value={form.firstName} onChange={e =>
                    setForm({
                        firstName: e.target.value,
                        lastName: form.lastName,
                        emailId: form.emailId
                    })
                }/>
                <input value={form.lastName} onChange={e => setForm(
                    {
                        ...form,
                        firstName: form.firstName,
                        lastName: e.target.value,
                        emailId: form.emailId
                    }
                )}/>
                <input value={form.emailId} onChange={e => setForm(
                    {
                        ...form,
                        firstName: form.firstName,
                        lastName: form.lastName,
                        emailId: e.target.value
                    }
                )}/>

                <p>firstName: {form.firstName}</p>
                <p>lastName: {form.lastName}</p>
                <p>emailId: {form.emailId}</p>
                <button onClick={
                    () => setForm(
                        {
                            firstName: 'firstName',
                            lastName: 'lastName',
                            emailId: 'emailId'
                        }
                    )
                }>Reset
                </button>
            </div>
        </div>
    );
}