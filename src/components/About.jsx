import "../styles/About.css";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiVite } from "react-icons/si";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya alya aulia syafitri , Lulusan SMA dari Aliyah Mu'allimin S.M
          Raja. Banyak sekali pelajaran yang bisa saya ambil setelah
          bertahun-tahun sekolah d situ, salah satu nya adalah tentang hafalan
          alquran yang sampai saat ini menjadi panutan hidup saya, Ada beberapa
          lomba yang saya ikutin Terutama adalah JUMBARA PMI NASIONAL pada tahun
          2023 saya memperoleh juara II angkatan putri pada waktu itu. Dan saya
          juga pernah mengikuti LATGAB ( LATIHAN GABUNGAN SEKOTA MEDAN)pada
          tahun 2022. Saya juga pernah mengikuti Olimpiade Di Hotel Madani pada
          tanggal 14-18 Oktober 2024. <br />
        </p>
        <p>
          Saya juga pernah ngajar ngaji di jalan selamat dimana saya merasa
          bangga pada masa masa SMA sudah menjadi guru ngaji . Skill & Basic
          saya adalah Menjadi Seorang Penghafal Alquran.
        </p>
        <h4>Programming & Tools</h4>
        <div className="skills">
          <FaReact />
          <FaFigma />
          <FaJs />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJava />
        </div>
      </div>
    </section>
  );
}

export default About;
