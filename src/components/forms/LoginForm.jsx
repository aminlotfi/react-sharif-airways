import {useFormik} from "formik";
import {Link} from "react-router-dom";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'ایمیل نمی‌تواند خالی باشد';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'فرمت ایمیل صحیح نیست';
    }

    if (!values.password) {
        errors.password = 'رمز عبور نمی‌تواند خالی باشد';
    } else if (values.password.length < 8) {
        errors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
    }

    return errors;
};

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="card-box flex flex-col items-start justify-start px-16 py-24 max-w-[450px] w-full mx-auto my-24">
            <h1 className="text-title text-[21px] self-center">ورود</h1>
            <h2 className="text-title text-[12px] self-center mt-8">به هواپیمایی شریف خوش آمدید!</h2>
            <form onSubmit={formik.handleSubmit} id="signupForm" className="flex flex-col items-start justify-start w-full mt-16">
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="email" className="text-[14px] text-title">ایمیل<span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.email}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="password" className="text-[14px] text-title">رمز عبور<span className="text-red-500">*</span></label>
                    <input type="password" id="password" name="password" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} autoComplete="new-password" />
                    {formik.touched.password && formik.errors.password ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.password}</small> : null}
                </div>
                <button type="submit" className={`w-full bg-primary-light hover:bg-primary-dark text-[15px] text-black rounded-5 px-4 py-3 mt-16 ${!(formik.isValid && formik.dirty) ? "opacity-60" : ""}`} disabled={!(formik.isValid && formik.dirty)}>ورود</button>
            </form>
            <div className="flex items-center justify-start w-full mt-16">
                <p className="text-[13px] text-title">هنوز حساب کاربری ندارید؟</p>
                <Link to="/signup" className="text-[13px] text-primary-dark mr-8">ثبت‌نام</Link>
            </div>
        </div>
    )
}

export default LoginForm