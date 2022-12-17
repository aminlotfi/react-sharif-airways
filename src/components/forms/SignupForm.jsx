import {useFormik} from "formik";
import {Link} from "react-router-dom";

const validate = values => {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'نام نمی‌تواند خالی باشد';
    } else if (values.firstname.length > 15) {
        errors.firstname = 'نام خانوادگی نمی‌تواند بیشتر از 15 کاراکتر باشد';
    }

    if (!values.lastname) {
        errors.lastname = 'نام خانوادگی نمی‌تواند خالی باشد';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'نام خانوادگی نمی‌تواند بیشتر از 20 کاراکتر باشد';
    }

    if (!values.email) {
        errors.email = 'ایمیل نمی‌تواند خالی باشد';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'فرمت ایمیل صحیح نیست';
    }

    if (!values.passport) {
        errors.passport = 'شماره پاسپورت نمی‌تواند خالی باشد';
    } else if (values.passport.length !== 10) {
        errors.passport = 'شماره پاسپورت باید 10 رقم باشد';
    }

    if (!values.password) {
        errors.password = 'رمز عبور نمی‌تواند خالی باشد';
    } else if (values.password.length < 8) {
        errors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'تکرار رمز عبور نمی‌تواند خالی باشد';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'تکرار رمز عبور با رمز عبور یکسان نیست';
    }

    return errors;
};

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            passport: "",
            password: "",
            confirmPassword: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="card-box flex flex-col items-start justify-start px-16 py-24 max-w-[450px] w-full mx-auto my-24">
            <h1 className="text-title text-[21px] self-center">ثبت‌نام</h1>
            <h2 className="text-title text-[12px] self-center mt-8">به هواپیمایی شریف خوش آمدید!</h2>
            <form onSubmit={formik.handleSubmit} id="signupForm" className="flex flex-col items-start justify-start w-full mt-16">
                <div className="flex flex-col items-start justify-start w-full">
                    <label htmlFor="firstname" className="text-[14px] text-title">نام<span className="text-red-500">*</span></label>
                    <input type="text" id="firstname" name="firstname" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
                    {formik.touched.firstname && formik.errors.firstname ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.firstname}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="lastname" className="text-[14px] text-title">نام خانوادگی<span className="text-red-500">*</span></label>
                    <input type="text" id="lastname" name="lastname" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                    {formik.touched.lastname && formik.errors.lastname ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.lastname}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="email" className="text-[14px] text-title">ایمیل<span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.email}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="passport" className="text-[14px] text-title">شماره‌ پاسپورت<span className="text-red-500">*</span></label>
                    <input type="text" id="passport" name="passport" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passport} autoComplete="off" />
                    {formik.touched.passport && formik.errors.passport ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.passport}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="password" className="text-[14px] text-title">رمز عبور<span className="text-red-500">*</span></label>
                    <input type="password" id="password" name="password" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} autoComplete="new-password" />
                    {formik.touched.password && formik.errors.password ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.password}</small> : null}
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-16">
                    <label htmlFor="confirmPassword" className="text-[14px] text-title">تکرار رمز عبور<span className="text-red-500">*</span></label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="custom-input" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} autoComplete="new-password" />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small className="text-[12px] text-red-500 mt-1">{formik.errors.confirmPassword}</small> : null}
                </div>
                <button type="submit" className={`w-full bg-primary-light hover:bg-primary-dark text-[15px] text-black rounded-5 px-4 py-3 mt-16 ${!(formik.isValid && formik.dirty) ? "opacity-60" : ""}`} disabled={!(formik.isValid && formik.dirty)}>ثبت‌نام</button>
            </form>
            <div className="flex items-center justify-start w-full mt-16">
                <p className="text-[13px] text-title">قبلا ثبت‌نام کرده‌اید؟</p>
                <Link to="/login" className="text-[13px] text-primary-dark mr-8">ورود</Link>
            </div>
        </div>
    )
}

export default SignupForm