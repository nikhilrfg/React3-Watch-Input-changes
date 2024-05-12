import React from "react"

export default function Form() {
    // const [firstName, setFirstName] = React.useState("")
    const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        LastName: "", 
        email: "", 
        comments: "",
        isFriendly:true,
        employment: "",
        favColor: ""
    }
)
    const id = React.useId()

    // console.log(formData.employment)
    console.log(formData.favColor)
    
    // const [LastName, setLastName] = React.useState("")

    // console.log(firstName, LastName)
    // console.log(formData)
    console.log(formData.comments)

    // function handleChange(event){
    //     setFirstName(event.target.value)
    // }
    function handleChange(event){
        // console.log(event.target.value)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
           return {
            ...prevFormData, 
            // [event.target.name]: event.target.value
            [name]:type === "checkbox" ? checked :value
           } 
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    // function handleFirstNameChange(event) {
    //     setFirstName(event.target.value)
    // }
    // function handleLastNameChange(event) {
    //     setLastName(event.target.value)
    // }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <input
                type="text"
                // placeholder="First Name"
                onChange = {handleChange}
                name="firstName"
                value={formData.firstName}
                id={id + "-firstName"}
                // onChange={handleFirstNameChange}
            />
            <label htmlFor={id + "-LastName"}>Last Name</label>
            <input
                type="text"
                // placeholder="Last Name"
                onChange = {handleChange}
                name="LastName"
                value={formData.LastName}
                id={id + "-LastName"}
                // onChange={handleLastNameChange}
            />
            <label htmlFor={id + "-email"}>Email</label>
            <input
                type="email"
                // placeholder="Email"
                onChange = {handleChange}
                name="email"
                value={formData.email}
                id={id + "-email"}
                
            />
            {/* <textarea>Whatever you put inside</textarea> */}
            <label htmlFor={id + "-comments"}>Comments</label>
            <textarea
                 value={formData.comments}
                //  placeholder="Comments"
                 onChange = {handleChange}
                 name ="comments"
                 id={id + "-comments"}
            />
            <input 
                type="checkbox" 
                // id="isFriendly" 
                id={id + "-isFriendly"} 
                checked={formData.isFriendly}  
                onChange={handleChange}
                name="isFriendly"
            />
            {/* <label htmlFor="isFriendly">Are You friendly</label> */}
            <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    // id="unemployed"
                    id={id + "-unemployed"}
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                {/* <label htmlFor="unemployed">Unemployed</label> */}
                <label htmlFor={id + "-unemployed"}>Unemployed</label>
                <br />

                <input
                    type="radio"
                    // id="part-time"
                    id={id + "-part-time"}
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                {/* <label htmlFor="part-time">Part-time</label> */}
                <label htmlFor={id + "-part-time"}>Part-time</label>
                <br />

                <input
                    type="radio"
                    // id="full-time"
                    id={id + "-full-time"}
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                {/* <label htmlFor="full-time">Full-time</label> */}
                <label htmlFor={id + "-full-time"}>Full-time</label>
                <br />


            </fieldset>
            <br />

            {/* <label htmlFor="favColor">What is your favorite color?</label> */}
            <label htmlFor={id + "-favColor"}>What is your favorite color?</label>
            <br />
            <select 
                // id="favColor"
                id={id + "-favColor"} 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
            {/* <input type="submit" value="Send it in"/> */}
        </form>
    )
}
