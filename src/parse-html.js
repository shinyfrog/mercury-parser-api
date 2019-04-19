import Mercury from '@postlight/mercury-parser';

import {
  isURLBlacklisted,
  EMPTY_MERCURY_RESPONSE,
  isAuthenticated,
  corsSuccessResponse,
  corsErrorResponse,
  corsUnauthorizedResponse,
  runWarm,
} from './utils';

const parseHtml = async ({ body, headers }, context, cb) => {
  // const { url, html } = JSON.parse(body);
  const { url } = JSON.parse(body);

  if (!isAuthenticated(headers)) {
    console.log(`Client Authorization Failed!\nurl: ${url}`);
    return cb(
      null,
      corsUnauthorizedResponse({ message: 'Your are not authorized.' })
    );
  }

  // Blacklist

  if (isURLBlacklisted(url)) {
    console.log('Blacklisted url: ', url);
    return cb(null, corsSuccessResponse(EMPTY_MERCURY_RESPONSE));
  }

  // ---

  const result = await Mercury.parse(url);
  // const result = await Mercury.parse(url, { html });

  console.log(
    `url: ${url}\nresult: ${
      result ? `success, words: ${result.word_count}` : 'error'
    }`
  );

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(parseHtml);
