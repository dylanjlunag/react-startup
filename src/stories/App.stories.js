import App from '../App';

export default {
  title: 'Example/App',
  component: App
};

function Template(args) {
  return <App {...args} />;
}

export const Default = Template.bind({});
