# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Gün Projesi: Login Formu E2E Testi

Yeni başlayan bir projenin setupini yapmak ve login sayfasini hazirlamak sana düştü. 3 ana görevin var: Proje oluşturmak, test yazmak ve projeyi githuba yüklemek.

Bu görevleri bitirdiğinde, github adresini örnek formattaki gibi index.js dosyasina yazmayi unutma.

1. Proje oluşturulacak

Projeyi kendi bilgisayarinizda sifirdan oluşturarak yapacaksin. (Tercihen vite ile)
Uygulamanizda bir Login formu (Login.jsx) ve geçici bir success sayfasi (Success.jsx) olacak.
Componentleri components klasöründe oluşturmaya dikkat.

Login formu: email, şifre ve şartlari kabul ediyorum alanindan oluşacak.
Form alanlari için validasyonlar eklenecek:
geçerli email (regex kullanilabilir),
strong password (regex kullanilabilir)
ve şartlari kabul etmesi gerekecek.
tüm validasyonlari geçer ise login butonu aktif olacak.

2. Cypress ile de 2 farkli senaryoda test yazilacak:

a) Başarili form doldurulduğunda submit edebiliyorum:

success sayfasini açabiliyorum.
b) Hatali durumlarda beklenen hata mesajlari görünüyor ve buton disabled kaliyor.

email yanliş girdim:

ekranda 1 tane hata mesaji var
ekranda doğru hata mesaji var
buton disabled durumda
email ve password yanliş

ekranda 2 tane hata mesaji var
ekranda password hata mesaji var
email ve password doğru ama kurallari kabul etmedim.

buton disabled mi

3. projeyi githuba yükleyeceksin

public olsun
en az 4 commit olsun
proje setupi bitince
login sayfasi ve success sayfasi bitince
form validasyonlari eklenince
testler eklenince
