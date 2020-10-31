import * as queryString from 'query-string';
import Toast from 'react-native-simple-toast';

function getFetchUrl(args) {
  return args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

export default async function callWebApi(args) {
  try {
    const res = await fetch(
      getFetchUrl(args),
      {
        method: args.type
      }
    );
    return res;
  } catch (err) {
    Toast.show(err.message)
  }
}
