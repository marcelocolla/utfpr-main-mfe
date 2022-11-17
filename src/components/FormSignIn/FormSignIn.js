import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore';
import { PROFILE } from 'constants/routes';
import { FormSignInFields } from 'components/FormSignInFields';
import { signIn } from 'services/signIn';
import { SignInSchema } from './FormSignIn.schema';
export const FormSignIn = () => {
    const history = useHistory();
    const initialValues = {
        email: '',
        password: '',
    };
    const { updateUser } = useUserStore();
    async function handleSubmit(values, actions) {
        try {
            const result = await signIn(values);
            updateUser(result.data);
            history.replace(PROFILE);
        }
        catch (err) {
            console.log('>>> sign in error', err);
            actions.setSubmitting(false);
        }
    }
    return (<Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={SignInSchema} component={FormSignInFields}/>);
};
