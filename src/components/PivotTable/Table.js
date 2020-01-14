import React, { useState } from "react";
import ReactDOM from "react-dom";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { Container } from "react-bootstrap";

// see documentation for supported input formats
const data = [
  {
    id: "c738ad07-bbc0-4f34-b73a-fde6b21dad86",
    name: "Adaline Spinka Sr.",
    gender: "Male",
    city: "Gurgaon",
    country: "India",
    company: "PWC",
    ctc: "760.93"
  },
  {
    id: "512ad5c3-5ca3-46a1-95bf-40a421976c14",
    name: "Adell Mills",
    gender: "Female",
    city: "Banglore",
    country: "India",
    company: "Expedia",
    ctc: "466.77"
  },
  {
    id: "539682d2-052c-4f87-b517-63776115f5d0",
    name: "Adriana Haag",
    gender: "Female",
    city: "Hyderabad",
    country: "India",
    company: "Expedia",
    ctc: "979.81"
  },
  {
    id: "3f08305d-3c03-4119-afd9-13c12a68db23",
    name: "Alberta Dietrich",
    gender: "Female",
    city: "Banglore",
    country: "India",
    company: "Expedia",
    ctc: "49.16"
  },
  {
    id: "5476d9b9-feb8-44d2-a0cb-9d1cff1c09a4",
    name: "Alvah Carroll",
    gender: "Male",
    city: "Banglore",
    country: "India",
    company: "PWC",
    ctc: "587.44"
  },
  {
    id: "02e466a2-0f4d-403d-a518-f911316a37cc",
    name: "Anastacio Blanda PhD",
    gender: "Male",
    city: "New Delhi",
    country: "India",
    company: "Dafodil",
    ctc: "900.17"
  },
  {
    id: "844c50ae-ccf5-4cec-86c0-a01227748f04",
    name: "Annamarie Strosin",
    gender: "Female",
    city: "New Delhi",
    country: "India",
    company: "Dafodil",
    ctc: "597.30"
  },
  {
    id: "9063049e-8f9e-4e3d-a7d3-afc79f061d36",
    name: "Archibald Hintz Jr.",
    gender: "Male",
    city: "Banglore",
    country: "India",
    company: "Google",
    ctc: "886.92"
  },
  {
    id: "3c41b1db-a330-4150-8f0b-8e60dbccc701",
    name: "Betsy Herzog",
    gender: "Male",
    city: "Gurgaon",
    country: "India",
    company: "Dafodil",
    ctc: "576.19"
  },
  {
    id: "e392bfcd-ef11-4d9d-902c-00c4fff9595a",
    name: "Bryce McDermott I",
    gender: "Female",
    city: "Hyderabad",
    country: "India",
    company: "Expedia",
    ctc: "802.50"
  }
];

const Table = () => {
  const [renderdata, setRenderData] = useState(data);
  return (
    <Container>
      <PivotTableUI
        data={renderdata}
        onChange={s => setRenderData(s)}
        {...renderdata}
      />
    </Container>
  );
};

export default Table;
