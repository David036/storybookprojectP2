import Indicator from ".";

export default {
  title: "Indicator",
  component: Indicator,
  argTypes: {
    size: {
      type: "string",
      description: "Indicator size option",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    currency: {
        type:'string',
        description:'Indicator currency option',
        defaultValue:'֏',
        options: ['$','€','֏'],
        control:{
            type:'radio'
        }
    },
    balance: {
        type:'number',
        description:'Indicator balance option',
        defaultValue:'100',
        control:{
            type:'number'
        }
    },
    corners: {
        type: "string",
        description: "Indicator corners option",
        defaultValue: "normal",
        options: ["circle", "normal", "square"],
        control: {
          type: "radio",
        },
      },
  },
};

const Template = (arg) => <Indicator {...arg} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  currency:'֏',
  balance:'100',
  corners:'normal'
};
