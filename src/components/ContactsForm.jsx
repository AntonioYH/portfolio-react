import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import sendEmail from '../utils/sendEmail';

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => sendEmail(data, setValue))}
      className="flex flex-col justify-center items-center gap-4"
    >
      <div className="form__input flex flex-col ">
        {/* name */}
        <input
          className="p-1 dark:text-white placeholder:text-center rounded dark:bg-[#181818] bg-[#f0f0f0] focus:outline-none"
          type="text"
          name="user_name"
          placeholder="Name"
          {...register('user_name', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /[a-zA-z-Zá-úÁ-ÚñÑ]{4,20}/,
              message: 'Please enter a valid name',
            },
          })}
        />
        {errors.user_name && (
          <span className="text-center dark:text-white">{errors.user_name.message}</span>
        )}
      </div>
      <div className="form__input  flex flex-col">
        {/* email */}
        <input
          className="p-1 dark:text-white placeholder:text-center rounded bg-[#f0f0f0] dark:bg-[#181818] focus:outline-none"
          type="email"
          name="user_email"
          placeholder="Email Address"
          {...register('user_email', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value:
                /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: 'plase enter a valid email',
            },
          })}
        />
        {errors.user_email && (
          <span className="text-center dark:text-white">{errors.user_email.message}</span>
        )}
      </div>
      <div className="form__input  flex flex-col">
        <textarea
          className="p-1 dark:text-white min-h-[150px] max-h-[400px] dark:bg-[#181818] focus:outline-none placeholder:text-center rounded resize-y bg-[#f0f0f0]"
          name="message"
          autoComplete="on"
          placeholder="Send me a message"
          {...register('message', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
        ></textarea>

        {errors.message && (
          <span className="text-center dark:text-white">{errors.message.message}</span>
        )}
      </div>
      <button className="w-10/12 shadow shadow-black max-w-[300px] h-[30px] rounded active:scale-[0.8] bg-[#e2286c] lg:hover:bg-[#990c40] transition text-white font-medium">
        Send
      </button>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            loading: {
              duration: 1000,
            },
            style: {
              boxShadow: '3px 3px 6px black',
              padding: '16px',
            },
          }}
        />
      </div>
    </form>
  );
};

export default ContactsForm;
