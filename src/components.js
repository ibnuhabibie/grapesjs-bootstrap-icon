export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("bootstrapIcon", {
    isComponent: (el) => {
      console.log(el, el.tagName);
      return el.tagName === "I";
    },

    view: {
      events: {
        dblclick: "onActive",
      },
      onActive(e) {
        editor.Commands.run("open:icon-picker");
      },
    },
  });
};
