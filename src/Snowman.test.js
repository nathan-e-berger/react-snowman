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

const MAX_GUESSES = 6;

let renderGame;
let images = [img0, img1, img2, img3, img4, img5, img6];
let words = ["apple"];

beforeEach(function () {
    renderGame = render(
        <Snowman images={images} words={words} maxWrong={MAX_GUESSES} />
    );
});

it("render without crashing", function () {
    console.log(renderGame);
});

it("does not image after max guesses", function () {
    const images = [img0, img1, img2, img3, img4, img5, img6];
    const words = ["apple"];
    const maxGuesses = 6;

    const { container, debug } = render(
        <Snowman images={images} words={words} maxWrong={maxGuesses} />
    );

    fireEvent.click(container.querySelector("button[value=s]"));
    fireEvent.click(container.querySelector("button[value=u]"));
    fireEvent.click(container.querySelector("button[value=o]"));
    fireEvent.click(container.querySelector("button[value=k]"));
    fireEvent.click(container.querySelector("button[value=j]"));
    fireEvent.click(container.querySelector("button[value=m]"));

    expect(container.querySelector("img[src]")).not.toBeEmptyDOMElement();

    fireEvent.click(container.querySelector("button[value=q]"));

    expect(container.querySelector("img[src]")).toBeEmptyDOMElement();
});
