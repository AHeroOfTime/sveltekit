import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index2.js";
import { b as building, v as version } from "../../chunks/environment.js";
import { B as BROWSER, D as DEV } from "../../chunks/prod-ssr.js";
const browser = BROWSER;
const dev = DEV;
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-9vqzll{background:#666;color:#fff}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header><h1 class="${"svelte-9vqzll"}">Level Up Blog</h1>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer><a href="${"/contact"}">Contact</a>
  <p>Level Up Tutorials</p></footer>`;
});
const styles = "";
const Episodes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episodes } = $$props;
  if ($$props.episodes === void 0 && $$bindings.episodes && episodes !== void 0)
    $$bindings.episodes(episodes);
  return `<nav><ul>${each(episodes, (episode) => {
    return `<li><a${add_attribute("href", `/show/${episode.number}`, 0)}>${escape(episode.title)}</a>
      </li>`;
  })}</ul></nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1tb76m9{display:grid;grid-template-columns:300px 1fr;gap:20px}aside.svelte-1tb76m9{order:-1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let all_episodes;
  let { data } = $$props;
  console.log(browser, building, dev, version);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ all_episodes } = data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}



<main class="${"svelte-1tb76m9"}"><div class="${"main"}"><button>Change Page</button>
    ${slots.default ? slots.default({}) : ``}</div>
  <aside class="${"svelte-1tb76m9"}">${validate_component(Episodes, "Episodes").$$render($$result, { episodes: all_episodes }, {}, {})}</aside></main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
