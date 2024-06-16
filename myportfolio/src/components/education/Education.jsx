import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Education.module.css";
import educationData from "./educationData.json";
import MyCertificates from "./MyCertificates";
import { certificateImages } from "../../utills/constants";
import Footer from "../../utills/common/Footer"

const Education = ({ bgColor }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const tableClasses = `table table-striped table-bordered ${styles.educationTable}`;

  return (
    <>
    <div className={`${styles.mainEdu1}`}>
      <div className={`text-white ${styles.textEdu}`} data-aos="fade-down">
        My Education
      </div>
      <div className={`${styles.mainEdu} container`}>
        <div className={`table-responsive`} data-aos="fade-up">
          <table className={tableClasses}>
            <thead>
              <tr >
                <th scope="col" className="bg-black text-white  " >Level</th>
                <th scope="col" className="bg-black text-white " >Institution</th>
                <th scope="col" className="bg-black text-white " >Details</th>
                
              </tr>
            </thead>
            <tbody>
              {educationData.map((item) => (
                <tr key={item.id} className="bg-black " style={{    color:" rgb(232, 187, 6)"}}>
                  <td className="bg-black " style={{ color:" rgb(232, 187, 6)"}}>{item.level}</td>
                  <td className="bg-black " style={{ color:" rgb(232, 187, 6)"}}>{item.institution}</td>
                  <td className="bg-black " style={{ color:" rgb(232, 187, 6)"}}>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <MyCertificates certificateImages={certificateImages}/>
    <Footer/></>
  
  );
};

export default Education;
