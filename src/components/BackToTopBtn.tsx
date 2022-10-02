import { NONAME } from "dns";
import React from "react";

export default function BackToTopBtn() {
  const [BackToTopBtn, setBackToTopBtn] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {BackToTopBtn && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: "rgba(255, 255, 255, 0.3)",
            color: "#2f3e12",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={scrollUp}
        >
          ↑
        </button>
      )}
    </>
  );
}
