import React from "react";

function Banner() {
  return (
    <div style={styles.banner}>
      <img
        src="https://via.placeholder.com/1200x300"
        alt="Banner"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  banner: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Banner;
