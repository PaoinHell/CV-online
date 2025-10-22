import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { avatarImg, info, skills, exps, educations } from "./sidebarData";
import { groupSkills, toggleState } from "./sidebarUtils";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVTemplate from "./CV_template";

const Sidebar = () => {
  const data = {
    name: "TRAN QUOC BAO",
    position: "Software Engineer",
    avatar: avatarImg,
    info,
    skills,
    exps,
    educations,
    about:
      "I am a Software Engineering graduate from Huflit with 2 years of experience in JavaScript frameworks, including NodeJS and ReactJS. I have hands-on experience working with both SQL and NoSQL databases, particularly MongoDB. Additionally, I have professional experience as a Business Analyst at FPT Information System Corp, where I gathered requirements, created documentation, and supported project implementation.",
  };

  const [openExps, setOpenExps] = useState(
    exps.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const [openEducations, setOpenEducations] = useState(
    educations.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const groupedSkills = groupSkills(skills);
  const [openGroups, setOpenGroups] = useState(
    Object.keys(groupedSkills).reduce((acc, group) => {
      acc[group] = true;
      return acc;
    }, {})
  );

  return (
    <>
      <div>
        <div id="cv-content" className="flex">
          {/* Sidebar */}
          <div className="w-100 bg-[#566F77] text-[#F2F4F6] h-auto relative duration-300 m-5 rounded-xl overflow-hidden">
            <div className="bg-[#7DA38C] p-5 pt-8 flex flex-col justify-between items-center">
              <img
                src={avatarImg}
                alt="avatar"
                className="w-40 h-40 object-cover duration-300 rounded-full border-4 border-[#9BBF9E]"
              />
              <h1 className="text-4xl pt-5 font-bold text-center">
                TRAN QUOC BAO
              </h1>
              <h2 className="text-2xl text-center">Software Engineer</h2>
            </div>

            <div className="mt-5 w-full px-10">
              <ul className="my-3">
                {info.map((item, idx) => (
                  <li key={idx} className="flex justify-between space-x-2 mb-3">
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-5 mb-8">
                {Object.keys(groupedSkills).map((group, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center cursor-pointer mb-2 "
                      onClick={() =>
                        setOpenGroups(toggleState(openGroups, group))
                      }
                    >
                      <h2 className="font-semibold text-xl bg-[#7DA38C] rounded-4xl overflow-hidden p-2 px-3">
                        {group}
                      </h2>
                      <div className="flex-grow border-b border-[#FAEBEF] mx-2"></div>
                      {openGroups[group] ? (
                        <ChevronDown className="text-[#FAEBEF]" size={20} />
                      ) : (
                        <ChevronRight className="text-[#FAEBEF]" size={20} />
                      )}
                    </div>
                    {openGroups[group] && (
                      <ul className="list-disc list-inside space-y-1 pl-3">
                        {groupedSkills[group].map((skill, idx) => (
                          <li key={idx} className="text-lg">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 m-5">
            {/* About Me */}
            <SectionTitle title="About Me" />
            <div className="mx-2 mt-4">
              <p className="text-[#566F77] text-base leading-relaxed">
                I am a Software Engineering graduate from Huflit with 2 years of
                experience in JavaScript frameworks, including NodeJS and
                ReactJS. I have hands-on experience working with both SQL and
                NoSQL databases, particularly MongoDB. Additionally, I have
                professional experience as a Business Analyst at FPT Information
                System Corp, where I gathered requirements, created
                documentation, and supported project implementation.
              </p>
            </div>
            {/* Experiences */}
            <SectionTitle title="EXPERIENCES" />
            <div className="mx-2 mt-4">
              {exps.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="text-[#566F77] font-semibold text-lg my-3 cursor-pointer flex justify-between items-center"
                    onClick={() => setOpenExps(toggleState(openExps, index))}
                  >
                    <span>
                      {exp.time} | {exp.name} | {exp.position}
                    </span>
                  </div>
                  {openExps[index] && (
                    <ul className="list-disc list-inside text-[#566F77] text-base space-y-3 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Educations */}
            <SectionTitle title="EDUCATIONS" />
            <div className="mx-2 mt-4">
              {educations.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="text-[#566F77] font-semibold text-lg my-3 cursor-pointer flex justify-between items-center"
                    onClick={() =>
                      setOpenEducations(toggleState(openEducations, index))
                    }
                  >
                    <span>
                      {edu.time} | {edu.name}
                    </span>
                  </div>
                  {openEducations[index] && (
                    <ul className="list-disc list-inside text-[#566F77] text-base leading-relaxed">
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end m-5">
          <PDFDownloadLink
            document={<CVTemplate data={data} />}
            fileName="TranQuocBao_CV.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className="bg-gray-400 text-white px-4 py-2 rounded">
                  Đang tạo PDF...
                </button>
              ) : (
                <button className="bg-[#7DA38C] text-white px-4 py-2 rounded hover:bg-[#6B8C70]">
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// Reusable section title
const SectionTitle = ({ title }) => (
  <div className="flex items-center mb-2 ">
    <div className="flex-grow border-2 rounded-full border-[#566F77] mx-2"></div>
    <h2 className=" bg-[#566F77]  text-[#F2F4F6] font-semibold text-2xl rounded-4xl overflow-hidden p-2 px-5">
      {title}
    </h2>
    <div className="flex-grow border-2 rounded-full border-[#566F77] mx-2"></div>
  </div>
);
