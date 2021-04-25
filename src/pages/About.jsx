import React from "react";

const About = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna
        felis, mattis eu consectetur eget, pulvinar vel nulla. Morbi euismod ex
        dui, a sodales erat maximus ut. Nullam dui tortor, sollicitudin eu
        ultricies ut, ultrices ut magna. Etiam at interdum elit. Cras consequat
        magna in lacus congue feugiat.
      </p>
      <p>
        Donec non libero et est bibendum cursus. Curabitur placerat lacus ut
        urna convallis consectetur. Integer vel mattis nisi. Nam tempus
        tristique lorem vel porta. Nulla id felis ligula. Praesent at fringilla
        enim, aliquet euismod ipsum. Quisque nec nulla placerat, pharetra lacus
        ac, ultricies nisi.
      </p>
      <p>
        Maecenas posuere luctus arcu eu aliquam. Nullam fringilla dapibus
        elementum. Proin gravida vitae lorem et dictum. Nullam ut finibus elit.
        Praesent elementum, turpis sit amet sollicitudin rutrum, mauris velit
        finibus lorem, vel rhoncus nulla enim nec erat. Nullam nec tempus
        tortor, ut sodales quam.
      </p>
    </div>
  );
};

About.defaultProps = {
  title: "About Page",
};

export default About;
