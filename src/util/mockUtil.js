import Mock from "mockjs";

const kinds = [
  "cnstring",
  "name",
  "location",
  "email",
  "time",
  "id",
  "image",
  "string",
  "number",
  "boolean",
  "array",
  "object",
];

const stringTemplate = "abcdefghijklmnopqrstuvwxyz0123456789";

const handlers = {
  name: () => "@cname",
  location: (bool = true) => `@county(${bool})`,
  email: () => "@email",
  time: (temp) => `@date('${temp}')`,
  id: () => `@guid`,
  image: (obj) => `@image('${obj.size}','@color',@string('${stringTemplate}',${obj.string}))`,
  string: (length) => `@string('${stringTemplate}',${length})`,
  number: (length) => `@string('0123456789',${length})`,
  boolean: () => `@boolean`,
  cnstring: (length) => `@cword(${length})`,
  object: handleTemplateObject,
  array: handleTemplateObject,
};

function handleTemplateObject(template) {
  const mockTemplate = {};
  for (const templateKey in template) {
    let splits = templateKey.split("_");
    const [name, type = "", length = 0] = splits; //第一个为自定义名称，第二个为数据类型
    const templateObject = template[templateKey];
    if (type === "array") {
      mockTemplate[`${name}|${length}`] = [handlers[type](templateObject)];
    } else if (splits.length === 1) {
      return handlers[name](templateObject);
    } else if (splits.length === 2) {
      mockTemplate[name] = handlers[type](templateObject);
    }
  }
  return mockTemplate;
}

export default function createMockServer(path = "http://localhost:3000/", type = "get", template = {}) {
  const result = handleTemplateObject(template);
  Mock.mock(path, type, result);
}
