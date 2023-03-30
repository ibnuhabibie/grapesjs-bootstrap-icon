export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('bootstrapIcon', {
    view: {
      events: {
        dblclick: 'onActive',
      },
      onActive(e) {
        editor.Commands.run('open:icon-picker')
      },
    },
  });
};
