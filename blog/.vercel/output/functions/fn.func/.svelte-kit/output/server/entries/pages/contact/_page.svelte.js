import { c as create_ssr_component, d as escape } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-13i9dmo{padding:20px;display:flex;gap:20px;flex-direction:column}label.svelte-13i9dmo{display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    console.log("form", form);
  }
  return `
${form?.error_message ? `<p class="${"message"}">${escape(form.error_message)}</p>` : ``}


${form?.message ? `<p>${escape(form.message)}</p>` : `


<form action="${"/contact?/email"}" class="${"svelte-13i9dmo"}">
  <label class="${"svelte-13i9dmo"}">Name: <input type="${"text"}" required name="${"name"}" id="${"name"}"></label>
  <label class="${"svelte-13i9dmo"}">Email: <input type="${"email"}" required name="${"email"}" id="${"email"}"></label>
  <label class="${"svelte-13i9dmo"}">Message: <textarea required name="${"message"}" id="${"message"}"></textarea></label>
  <button type="${"submit"}">Send Email</button></form>`}`;
});
export {
  Page as default
};
