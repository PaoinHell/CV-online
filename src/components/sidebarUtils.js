import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const groupSkills = (skills) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.group]) acc[skill.group] = [];
    acc[skill.group].push(skill.name);
    return acc;
  }, {});
};

export const toggleState = (prevState, key) => {
  return { ...prevState, [key]: !prevState[key] };
};

export const downloadPDF = async () => {
  const element = document.getElementById("cv-content");
  const canvas = await html2canvas(element, { scale: 2, useCORS: true });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save("CV.pdf");
};
