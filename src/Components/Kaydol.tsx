import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from '../config/yupConfig.js';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


function Kaydol() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      kulaniciAdi: '',
      mail: '',
      sifre: '',
      sifreTekrar: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.mail, values.sifre);

        await updateProfile(userCredential.user, { displayName: values.kulaniciAdi });

        toast.success("Kayıt başarılı!", { autoClose: 2500 });
        setTimeout(() => navigate("/"), 2500);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message, { autoClose: 2500 });
        } else {
          toast.error("Bilinmeyen bir hata oluştu", { autoClose: 2500 });
        }
      }
    },
  });


  return (
    <div className='kaydolContainer'>

      <div style={{ height: "auto" }} className='blurArea'>
        <h1 style={{ color: "white" }} > Cartera'ya Kayıt ol </h1>

        <form style={{ marginBottom: "20px" }} onSubmit={formik.handleSubmit}>

          <div className='inputWrapper'>
            <input name='kulaniciAdi' type="text" placeholder='Kullanıcı Adı Soyadı...' onChange={formik.handleChange} value={formik.values.kulaniciAdi} />
            {formik.touched.kulaniciAdi && formik.errors.kulaniciAdi && (
              <div className='error-message'>{formik.errors.kulaniciAdi}</div>
            )}
            <input name='mail' type="email" placeholder='Mail...' onChange={formik.handleChange} value={formik.values.mail} />
            {formik.touched.mail && formik.errors.mail && (
              <div className='error-message'>{formik.errors.mail}</div>
            )}
            <input name='sifre' type="password" placeholder='Şifre...' onChange={formik.handleChange} value={formik.values.sifre} />
            {formik.touched.sifre && formik.errors.sifre && (
              <div className='error-message'>{formik.errors.sifre}</div>
            )}
            <input name='sifreTekrar' type="password" placeholder='Şifre Tekrar...' onChange={formik.handleChange} value={formik.values.sifreTekrar} />
            {formik.touched.sifreTekrar && formik.errors.sifreTekrar && (
              <div className='error-message'>{formik.errors.sifreTekrar}</div>
            )}
          </div>

          <div className='buttonWrapper' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type='submit' className='GirisButton'>Kayıt Ol</button>
          </div>
        </form>

      </div >
      <ToastContainer />
    </div >
  )
}

export default Kaydol