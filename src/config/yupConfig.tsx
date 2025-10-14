import * as yup from "yup";

export const validationSchema = yup.object({
     kulaniciAdi: yup.string()
          .required("Kullanıcı ismi zorunludur"),

     mail: yup.string()
               .email("Geçerli bir e-posta girin")
               .required("E-mail zorunludur"),

     sifre: yup.string()
          .min(5, "Şifre en az 5 karakter olmalı")
          .required("Şifre zorunludur"),

     sifreTekrar: yup.string()
          .oneOf([yup.ref("sifre")], "Şifreler aynı olmalı")
          .required("Şifre tekrarı zorunludur"),
});
