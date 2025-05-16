import styles from "../styles/contact-form.module.css";
const Contacto = () => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className={`container ${styles.formContainer}`}>
        <form className={`${styles.form}`}>
          <div className={`${styles.formGroup}`}>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className={`${styles.formGroup}`}>
            <label for="cel">Contacto</label>
            <input type="cel" id="cel" name="cel" required="" />
          </div>
          <div className={`${styles.formGroup}`}>
            <label for="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required="">
              {" "}
            </textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
