// @ts-check

import React from "react";
import { storiesOf } from "@storybook/react";
import { CodeSurfer } from "@code-surfer/standalone";
import { StoryWithSlider } from "./utils";

storiesOf("Title & Subtitle", module)
  .add("Title", () => <TitleStory />)
  .add("Subtitle", () => <SubtitleStory />);

const code = `var x0 = 3
var x1 = 1
var x0 = 3`;

function TitleStory() {
  const steps = [
    { code, title: "Title 1", lang: "js" },
    { code, title: "Title 2" },
    { code, title: "Title 2" },
    { code },
    { code, title: "Title 3" }
  ];
  return (
    <StoryWithSlider max={steps.length - 1}>
      {progress => <CodeSurfer progress={progress} steps={steps} />}
    </StoryWithSlider>
  );
}
function SubtitleStory() {
  const steps = [
    { code, subtitle: "Subtitle 1", lang: "js" },
    { code, subtitle: "Subtitle 2" },
    { code, subtitle: "Subtitle 2" },
    { code },
    { code, subtitle: "Subtitle 3" }
  ];
  return (
    <StoryWithSlider max={steps.length - 1}>
      {progress => <CodeSurfer progress={progress} steps={steps} />}
    </StoryWithSlider>
  );
}
