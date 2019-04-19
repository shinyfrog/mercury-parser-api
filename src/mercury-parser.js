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

const mercuryParser = async (
  { queryStringParameters, headers },
  context,
  cb
) => {
  const { url } = queryStringParameters;

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

export default runWarm(mercuryParser);
