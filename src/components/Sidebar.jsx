import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import avatar from "../../public/avatar.jpg";
import icon_github from "../../public/icons/icon_github.png";
import icon_email from "../../public/icons/icon_email.png";
import icon_phone from "../../public/icons/icon_phone.png";
import icon_fb from "../../public/icons/icon_fb.png";

const Sidebar = () => {
  const [openGroups, setOpenGroups] = useState({});
  const skills = [
    { name: "JavaScript", group: "Tech Stacks" },
    { name: "NodeJS", group: "Tech Stacks" },
    { name: "ReactJS", group: "Tech Stacks" },
    { name: "MongoDB", group: "Tech Stacks" },
    { name: "C# basic", group: "Tech Stacks" },
    { name: "ASP.NET Core", group: "Tech Stacks" },
    { name: "Figma", group: "Tools" },
    { name: "Office Tools", group: "Tools" },
    { name: "Requirement Analysis", group: "Soft Skills" },
    { name: "Email Writing", group: "Soft Skills" },
    { name: "Teamwork", group: "Soft Skills" },
    { name: "Sociable, Friendly", group: "Soft Skills" },
    { name: "Basic English Communication", group: "Language" },
    { name: "TOEIC (Updating...)", group: "Cerfications" },
  ];

  // Gom skills theo group
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.group]) acc[skill.group] = [];
    acc[skill.group].push(skill.name);
    return acc;
  }, {});

  // Toggle trạng thái mở/đóng
  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const info = [
    {
      icon: icon_github,
      name: "Github",
      value: "https://github.com/PaoinHell",
    },
    {
      icon: icon_email,
      name: "Email",
      value: "paowork1410@outlook.com",
    },
    { icon: icon_phone, name: "Phone", value: "+84 939 092 594" },
    {
      icon: icon_fb,
      name: "Facebook",
      value: "facebook.com/pao.multiverse.1410",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-100 bg-[#566F77] text-[#F2F4F6] h-full relative duration-300 m-5  rounded-xl overflow-hidden">
        <div className="bg-[#7DA38C]">
          <div className="p-5 pt-8 flex flex-col justify-between items-center">
            <img
              src={avatar}
              alt="avatar"
              className="w-40 h-40 object-cover duration-300 rounded-full outline-5 outline-[#9BBF9E]"
            />
            <h1 className="text-4xl pt-5 font-bold text-center">
              TRAN QUOC BAO
            </h1>
            <h2 className="text-2xl text-center">Software Engineer</h2>
          </div>
        </div>

        <div className="mt-5 w-full px-10">
          <ul className="my-3">
            {info.map((item, idx) => (
              <li key={idx} className="flex justify-between space-x-2 mb-3">
                <img
                  src={item.icon} // path từ public/icons
                  alt={item.name}
                  className="w-5 h-5"
                />
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            {Object.keys(groupedSkills).map((group, index) => (
              <div key={index}>
                {/* Tiêu đề group + toggle */}
                <div
                  className="flex items-center cursor-pointer mb-2 "
                  onClick={() => toggleGroup(group)}
                >
                  <h2 className="font-semibold text-xl bg-[#7DA38C] rounded-4xl overflow-hidden p-2 px-3">
                    {group}
                  </h2>

                  {/* Dùng div để kéo đường ngang */}
                  <div className="flex-grow border-b border-[#FAEBEF]/40 mx-2"></div>

                  {openGroups[group] ? (
                    <ChevronDown className="text-[#FAEBEF]" size={20} />
                  ) : (
                    <ChevronRight className="text-[#FAEBEF]" size={20} />
                  )}
                </div>

                {/* Danh sách skill - chỉ hiện khi mở */}
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

      {/* Nội dung chính */}
      <div className="flex-1 p-7 text-[#0E4274]">
        <h1 className="text-2xl font-semibold">Trang chính</h1>
      </div>
    </div>
  );
};

export default Sidebar;
