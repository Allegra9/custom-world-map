import React from "react";
import { GithubPicker } from "react-color";

const ColorPicker = ({ color, handleColorChange }) => (
  <GithubPicker color={color} onChangeComplete={handleColorChange} />
);
export default ColorPicker;
