import { c as create_ssr_component, d as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episode;
  let user;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ episode, user } = data);
  return `<h2>${escape(user.email)}</h2>

<h1>${escape(episode.title)}</h1>

<!-- HTML_TAG_START -->${episode.html}<!-- HTML_TAG_END -->`;
});
export {
  Page as default
};
