import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from '../services';

export default Login;

function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        console.log("Submitted")
        return userService.login(username, password)
            .then((user) => {
                console.log("Authenticated", user)
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push("/dashboard");
            })
            .catch(error => {
                console.log("Error")
                setError('apiError', { message: error });
                router.push("/");
            });
    }

    return (
        <div className="mx-auto w-96 text-left">
            <div className="p-4 bg-blue-100 my-4 rounded-md">
                Username: test<br />
                Password: test
            </div>
            <div className="bg-slate-100 border border-neutral-200 rounded-md divide-y">
                <h4 className="text-2xl p-4 ">Next.js Basic Auth Example</h4>
                <div className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex-col">
                            <div className='p-2'>
                                <label >Username</label>
                            </div>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''} border w-full p-2 rounded-sm`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="flex-col my-4">
                            <div className='p-2'>
                                <label>Password</label>
                            </div>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''} border w-full p-2 rounded-sm`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="text-center rounded-md border-2 border-slate-400 py-1 px-4">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        {errors.apiError &&
                            <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}
