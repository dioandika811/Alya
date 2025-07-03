import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMosque } from "react-icons/fa";
import { FaQuran } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaMosque />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">Guru Ngaji</h4>
            <p>
              Sewaktu SMA Saya pernah merasa bangga pada saat itu bisa menjadi
              Guru Ngaji.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaQuran />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Skill & Basic
            </h4>
            <p>
              Selama saya menjalani hidup saya bangga terhadap diri saya bisa
              menjadi Penghafal AL Quran.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">Kuliah</h4>
            <p>
              Pada saat saya tamat sekolah saya mendapat tawaran dari teman ibu
              saya untuk mengikuti Program KIP, Alhamdulilah saya Lulus dan
              mengambil program KIP itu saat bersyukur sekarang bisa kuliah.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
