import PaginationRounded from ".";

export default {
    title:"Pagination",
    component:PaginationRounded,
    argTypes: {
        size: {
            type:'string',
            description:'Pagination size option',
            defaultValue:'medium',
            options:['small','medium','large'],
            control:{
                type:'radio'
            }
        },
        length:{
            type:'number',
            description:'Pagination length option',
            defaultValue:10,
            options:[5,10,25],
            control:{
                type:'radio'
            }
        },
        color:{
            type:'string',
            description:'Pagination color option',
            defaultValue:'white',
            options:['white','black','blue'],
            control:{
                type:'radio'
            }
        },
        transparency:{
            type:'string',
            description:'Pagination transparency option',
            defaultValue:'normal',
            options:['transparent','normal'],
            control:{
                type:'radio'
            }
        }
    }
};

const Template = (arg) => <PaginationRounded {...arg} />;

export const Default = Template.bind({});
Default.args = {
    size:'medium',
    length:10,
    color:'white',
    transparency:'normal',
}