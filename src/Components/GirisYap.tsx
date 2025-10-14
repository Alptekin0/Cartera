import { useNavigate } from 'react-router-dom'
import './ComponentsStill.css'
import { useFormik } from 'formik';
import { auth } from '../config/firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';



function GirisYap() {

     const navigate = useNavigate();

     const formik = useFormik({
          initialValues: {
               email: '',
               sifre: '',
          },
          onSubmit: async (values) => {
               try {
                    await signInWithEmailAndPassword(auth, values.email, values.sifre);
                    toast.success("Giriş başarılı!", { autoClose: 2000 });
                    setTimeout(() => navigate("/Home"), 2400);
               } catch (error) {
                    toast.error(error.message, { autoClose: 2500 });
               }
          },
     });

     return (
          <div className='girisYapContainer' >
               <div className='blurArea'>
                    <h2 className='girisYapTitle' >Giriş Yap</h2>
                    <form onSubmit={formik.handleSubmit}>
                         <div className='inputWrapper'>
                              <input name='email' type="text" placeholder='E-mail...' onChange={formik.handleChange} value={formik.values.email} />
                              <input name='sifre' type="password" placeholder='Şifre...' onChange={formik.handleChange} value={formik.values.sifre} />
                         </div>

                         <div className='buttonWrapper'>
                              <button type='submit' className='GirisButton'>Giriş yap</button>
                              <a className='KaydolButton' onClick={() => navigate("/Kaydol")}> Kayıt Ol </a>
                         </div>
                    </form>

               </div>
               <ToastContainer />
          </div>

     )
}

export default GirisYap