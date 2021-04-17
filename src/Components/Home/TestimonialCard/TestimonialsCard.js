import React from "react";
import TestimonialCard from "material-testimonial-card";

const TestimonialsCard = ({ data }) => {
  return (
    <div>
      <TestimonialCard
        name={data.name}
        image={data.image}
        content={data.description}
        project={data.company}
      />
    </div>
  );
};

export default TestimonialsCard;
