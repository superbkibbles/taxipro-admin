import pick from "lodash/pick";
import omit from "lodash/omit";
import startCase from "lodash/startCase";
import debounce from "lodash/debounce";
import _sortBy from "lodash/sortBy";
import _uniq from "lodash/uniq";
import _uniqBy from "lodash/uniqBy";
import { DefaultOptionType } from "antd/es/select";

const getEntries: any = (o: object, prefix = "") =>
  Object.entries(o).flatMap(([k, v]) =>
    Object(v) === v ? getEntries(v, `${prefix}${k}.`) : [[`${prefix}${k}`, v]]
  );
export const flatObject = (input: object) =>
  Object.fromEntries(getEntries(input));
export const makeOptions = (
  data: { [key: string]: any }[],
  label = "name",
  value = "id"
): DefaultOptionType[] =>
  data.map((item) => ({
    label: item[label],
    value: item[value],
    disabled: item.disabled,
  }));

const lodash = { omit, pick, startCase, debounce };

export const sortBy = _sortBy;
export const uniq = _uniq;
export const uniqBy = _uniqBy;

export default lodash;
