import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pagination from './Pagination';

export default {
    title: 'navigation/Pagination',
    component: Pagination,
    argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
    <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
    count: 10,
    page: 5,
    boundaryCount: 1,
    siblingCount: 1,
};
