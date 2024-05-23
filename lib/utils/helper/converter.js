import { marked } from "marked";

marked.use({
  mangle: false,
  headerIds: false,
});

// plainText
export const plainText = (content) => {
  const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};
