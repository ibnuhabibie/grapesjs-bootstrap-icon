import loadBlocks from "./blocks";
import loadComponents from "./components";

import addOpenCommand from "./commands/openIconPicker";

import en from "./locale/en";
import "./style.css";

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  // Load i18n files
  editor.I18n &&
    editor.I18n.addMessages({
      en,
      ...options.i18n,
    });

  // TODO Remove
  editor.on("load", () => {
    let bootstrapIconCdn =
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">';
    const head = editor.Canvas.getDocument().head;
    head.insertAdjacentHTML("beforeend", bootstrapIconCdn);
    document.head.insertAdjacentHTML("beforeend", bootstrapIconCdn);
    editor.addComponents(
      `<i data-gjs-type="bootstrapIcon"  class="bi-alarm" style="font-size: 20rem; color: cornflowerblue;"></i>`,
      { at: 0 }
    );
  });

  addOpenCommand(editor, options);
};
