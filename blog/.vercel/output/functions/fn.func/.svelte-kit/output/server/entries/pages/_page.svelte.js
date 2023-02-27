import { c as create_ssr_component, f as subscribe, d as escape, v as validate_component } from "../../chunks/index2.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Test</h1>`;
});
console.log("Starting databse...");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let latest_episode;
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    console.log($navigating, $page);
  }
  ({ latest_episode } = data);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `<h3>${escape(latest_episode.title)}</h3>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>



${validate_component(Test, "Test").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
