import Input from ".";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      type: "string",
      description: "Input size option",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    text: {
      type: "string",
      description: "Input placeholder option",
      defaultValue: "placeholder",
      control: {
        type: "text",
      },
    },
    corners: {
      type: "string",
      description: "Input Corners option",
      defaultValue: "normal",
      options: ["circle", "normal", "square"],
      control: {
        type: "radio",
      },
    },
    color: {
      type: "string",
      description: "Input colors option",
      defaultValue: "white",
      options: ["white", "black", "blue"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg) => <Input {...arg} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  text: "placeholder",
  corners: "normal",
  color: "white",
};
