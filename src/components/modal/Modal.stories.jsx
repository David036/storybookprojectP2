import Modal from ".";

export default {
    title:'Modal',
    component:Modal,
    argTypes: {
        size:{
            type:'string',
            description:'Modal size option',
            defaultValue:'medium',
            options:['small','medium','large'],
            control:{
                type:'radio'
            }
        },
        corners:{
            type:'string',
            description:'Modal Corners option',
            defaultValue:'normal',
            options:['circle','normal','square'],
            control:{
                type:'radio'
            }
        },
    }
};

const Template = (arg) => <Modal {...arg} />

export const Default = Template.bind({})
Default.args = {
    size:'medium',
    corners:'normal'
}