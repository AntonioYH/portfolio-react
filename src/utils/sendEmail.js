import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import setValuesForm from './setValuesForm';

const sendEmail = async (data, setValue) => {
  const { user_name, user_email, message } = data;

  setValuesForm(setValue);
  toast.loading('Loading...');
  try {
    const res = await emailjs.send(
      'service_20s6sfb',
      'contact_form',
      {
        user_name,
        user_email,
        message,
      },
      'V_nGz_7P_3FzB1YKl',
    );
    if (res.status === 200) toast.success('successfully sent');
  } catch (error) {
    toast.error('There was an error');
  }
};

export default sendEmail;
