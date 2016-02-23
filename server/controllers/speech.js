import url from 'url';
import watson from 'watson-developer-cloud';
import config from '../config/';

export const getSpeech = (req, res) => {
  const text = url.parse(req.url, true).query.message;

  const text_to_speech = watson.text_to_speech({
    username: config.USERNAME_TEXT_TO_SPEECH,
    password: config.PASSWORD_TEXT_TO_SPEECH,
    version: 'v1'
  });

  const params = {
    text,
    voice: 'en-US_AllisonVoice', // Optional voice
    accept: 'audio/wav'
  };
  text_to_speech.synthesize(params).pipe(res);
};
