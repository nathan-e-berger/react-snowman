import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

import "./Snowman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("shows image after 7 wrong guesses", function () {
  const images = [img0, img1, img2, img3, img4, img5, img6];
  const words = ["apple"];
  const { container, debug } = render(<Snowman images={images}
    words={words} maxWrong={7}
  />);

  fireEvent.click(container.querySelector("button[value=s]"));
  fireEvent.click(container.querySelector("button[value=u]"));
  fireEvent.click(container.querySelector("button[value=o]"));
  fireEvent.click(container.querySelector("button[value=k]"));
  fireEvent.click(container.querySelector("button[value=j]"));
  fireEvent.click(container.querySelector("button[value=m]"));
  fireEvent.click(container.querySelector("button[value=s]"));

  expect(container).toMatchSnapshot();
  debug(container);
});
