import { useForm } from 'react-hook-form';
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={styles.formContainer}>
      <div>
        <label htmlFor="name" className={styles.label}>Nombre</label>
        <input type="text" id="name" {...register('name', { required: true })} className={styles.input} />
        {errors.name && <span className={styles.errorMessage}>Este campo es obligatorio</span>}
      </div>
      <div>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className={styles.input} />
        {errors.email && <span className={styles.errorMessage}>Ingrese un correo electrónico válido</span>}
      </div>
      <div>
        <label htmlFor="phone" className={styles.label}>Teléfono</label>
        <input type="text" id="phone" {...register('phone', { required: true, minLength: 10 })} className={styles.input} />
        {errors.phone && <span className={styles.errorMessage}>Ingrese un número de teléfono válido (mínimo 10 caracteres)</span>}
      </div>
      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};

export default CheckoutForm;

