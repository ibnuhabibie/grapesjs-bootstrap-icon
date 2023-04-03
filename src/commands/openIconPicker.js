import icons from "../icons.json";

export default (editor, opts = {}) => {
  editor.Commands.add("open:icon-picker", {
    handleClick(e) {
      let selected = editor.getSelected();

      if (e.target.tagName == "SPAN") {
        var className = "bi-" + e.target.innerText;
      } else if (e.target.tagName == "I") {
        var className = e.target.className;
      } else {
        var className = e.target.firstChild.className;
      }

      selected.setClass(className);
      editor.Modal.close();
    },

    filterIcon(e) {
      let value = e.target.value;

      let modalContent = document.querySelector(
        "#bootstrap-icon-modal .modal-content"
      );
      modalContent.lastChild.remove();

      let filteredIcons = icons.filter((icon) => icon.includes(value));
      let wrapper = this.renderIcons(filteredIcons);

      modalContent.appendChild(wrapper);
    },

    renderIcons(icons) {
      let wrapper = document.createElement("ul");
      wrapper.classList.add("icons-list");

      if (icons.length == 0) {
        let emptyState = document.createElement("p");
        emptyState.classList.add("empty-state");
        emptyState.innerText = "No icons found";

        wrapper.appendChild(emptyState);
        return wrapper;
      }

      icons.forEach((icon) => {
        let iconEl = document.createElement("i");
        iconEl.classList.add(`bi-${icon}`);

        let textEl = document.createElement("span");
        textEl.innerText = icon;

        let list = document.createElement("li");
        list.addEventListener("click", (e) => this.handleClick(e));

        list.appendChild(iconEl);
        list.appendChild(textEl);

        wrapper.appendChild(list);
      });

      return wrapper;
    },

    renderModal(icons) {
      let modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      let wrapper = this.renderIcons(icons);

      let searchWrapper = document.createElement("div");
      searchWrapper.classList.add("search-wrapper");

      let searchEl = document.createElement("input");
      searchEl.setAttribute("placeholder", "Start typing to filter...");

      searchWrapper.appendChild(searchEl);

      searchEl.addEventListener("keyup", (e) => this.filterIcon(e));

      modalContent.appendChild(searchWrapper);
      modalContent.appendChild(wrapper);

      return modalContent;
    },

    run() {
      editor.Modal.open({
        title: "Bootstrap Icon Picker",
        content: this.renderModal(icons),
        attributes: {
          id: "bootstrap-icon-modal",
        },
      });
    },
  });
};
