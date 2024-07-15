import { keysToSnakeCase } from "@bigbinary/neeto-cist";
import { stringify } from "qs";
import { toPairs, omit, pipe, isEmpty } from "ramda";

const buildUrl = (route, params) => {
  const placeHolder = [];
  toPairs(params).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      placeHolder.push(key);
      route = route.replace(`:${key}`, encodeURIComponent(value));
    }
  });

  const query_params = pipe(
    omit(placeHolder),
    keysToSnakeCase,
    stringify
  )(params);

  return isEmpty(query_params) ? route : `${route}?${query_params}`;
};
export default buildUrl;
