import '!style-loader!css-loader!sass-loader!../src/style/design-system.scss';

export const decorators = [
  (Story) => (
    <>
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    </>
  ),
];

export const parameters = {
  // layout: 'centered',
  controls: { expanded: true },
};
