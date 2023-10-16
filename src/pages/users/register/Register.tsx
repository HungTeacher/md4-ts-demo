
import { message} from "antd";
import api from '@/services/api'

export default function Register() {
    const handleFormSubmit = async (e: any) => {
        e.preventDefault()

        const newUser = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            password: e.target.password.value
        }

        await api.userApi.register(newUser).then((res: any) => {
            if(res.status != 200) {
                message.warning(res.data.message)
            } else {
                message.success(res.data !== undefined ? res.data.message: res.message)
                setTimeout(() => {
                    window.location.href = "/login"
                })
            }
        })
            .catch(err => {
                message.error('An error occurred during registration. Please try again')
            })
    }

    return (
        <div className="register_container">
            <div className="register-left">
                <h1><strong>Please register to receive discount...</strong><br />Let's get you set up!</h1>
            </div>
            <div className="register-right">
                <form onSubmit={handleFormSubmit}>
                    <div className="form_control">
                        <input type="text" name="userName" id="userName" placeholder="Enter your username"/>
                    </div>
                    <div className="form_control">
                        <input type="text" name="email" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form_control">
                        <input type="text" name="firstName" id="firstName" placeholder="Enter your first name"/>
                    </div>
                    <div className="form_control">
                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"/>
                    </div>
                    <div className="form_control">
                        <input type="password" name="password" id="password"/>
                    </div>
                    <button type="submit" className="register_btn">Create account</button>
                </form>
            </div>
        </div>
    )
}