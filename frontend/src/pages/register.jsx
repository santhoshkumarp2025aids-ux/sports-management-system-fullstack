import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../components/formschema/registerschema'
function Register() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    function onSubmit(data) {
        console.log(data)
        alert("Registration Successful")
        navigate("/")
    }
    return (
        <>
            <h1>Sports Management System</h1>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input placeholder="Enter your Name." type="text"
                    {...register("name")}/>
                <p>{errors.name?.message}</p>

                <label>Email:</label>
                <input placeholder="Enter your email" type="email"
                    {...register("email")}/>
                <p>{errors.email?.message}</p>

                <label>Password:</label>
                <input placeholder="Enter password" type="password"
                    {...register("password")}/>
                <p>{errors.password?.message}</p>

                <label>Age:</label>
                <input placeholder="Enter your age" type="number"
                    {...register("age")}/>
                <p>{errors.age?.message}</p>

                <label>Select Role:</label>
                <select {...register("role")}>
                    <option value="">Select Role</option>
                    <option value="Organizer">Organizer</option>
                    <option value="Team Manager">Team Manager</option>
                    <option value="Player">Player</option>
                    <option value="Viewer">Viewer</option>
                </select>
                <p>{errors.role?.message}</p>

                <label>Select Sport:</label>
                <select {...register("sport")}>
                    <option value="">Select Sport</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Tennis">Tennis</option>
                </select>
                <p>{errors.sport?.message}</p>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register