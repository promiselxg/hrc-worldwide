import { useEffect } from "react";
export default function Scroll_To_Top() {
  const onTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    onTop();
  }, []);
}
