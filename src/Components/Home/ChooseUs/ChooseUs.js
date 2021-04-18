import React from "react";
import ChooseUsCard from "../ChooseUsCard/ChooseUsCard";
import person from "../../../images/user.png";
const chooseUs = [
  {
    icon:
      "https://imgdb.net/storage/uploads/3a7b862c431f05856fa5ef8436b1ed2bd24e02b01906322de1787defb69baa6d.png",
    title: "Experienced Professionals ",
    details:
      "We pride ourselves on being a professional computer repair facility ",
  },
  {
    icon:
      "https://imgdb.net/storage/uploads/9a1dd5e435c0ed7eef465e780a4ed5416329ab85ba47642c88f89c4136d714f1.png",
    title: "Expert Technical Skills ",
    details:
      "Our technical experts will get you honest, reliable and professional help ",
  },
  {
    icon:
      "https://imgdb.net/storage/uploads/c157c42336b1a67c09927301212d715b8b1e18853177619d1ef97d9af734b34c.png",
    title: "Trustworthy See Reviews",
    details: "Our business has been built on trust and customer satisfaction  ",
  },
  {
    icon:
      "https://imgdb.net/storage/uploads/c7186f57713d21611a670274dd64520842609751c2520c2a32066734bef20c37.png",
    title: "Friendly Service",
    details:
      "Most of the services below are repaired within hours, and in most cases same day!  ",
  },
  {
    icon:
      "https://imgdb.net/storage/uploads/ff15d5429fad60299f6864fc05cefc63bfbe4bb37bbe9fd77840c8ef909a1bd6.png",
    title: "Excellent Reputation",
    details:
      "We have built our reputation on the attention to details and our loyal service to our customers",
  },
  {
    icon:
      "https://imgdb.net/storage/uploads/4e2fe7fcdc9133458ff6a784e38ae950ea246bcbe896561f5e34492379704c14.png",
    title: "Affordable Diagnosis",
    details:
      "We will diagnose your issues, provide you with options and give you a price for FREE!",
  },
];

const ChooseUs = () => {
  return (
    <section style={{ paddingBottom: "150px" }}>
      <div className="text-center">
        <h2>Why Choose Us</h2>
        <p style={{ paddingBottom: "80px" }}>
          There are many valid reasons why you should choose us to take care of
          your <br />
          valuable device
        </p>
      </div>
      <div className="container">
        <div className="row ">
          {chooseUs.map((choice) => (
            <ChooseUsCard key={choice.title} choice={choice}></ChooseUsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
