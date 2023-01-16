const {changeCapitalization, changeCapitalizationArrow} = require('../solutions/question3');

test('"MeRRy hAD a LITTle lAMp" should return "mErrY Had A littLE LamP"', () => {
  expect(changeCapitalization('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});

test('"MeRRy hAD a LITTle lAMp" should return "mErrY Had A littLE LamP"', () => {
  expect(changeCapitalizationArrow('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});

test('"Hi Shivam" should return "hI sHIVAM"', () => {
  expect(changeCapitalization('Hi Shivam')).toBe('hI sHIVAM');
});

test('"Hi Shivam" should return "hI sHIVAM"', () => {
  expect(changeCapitalizationArrow('Hi Shivam')).toBe('hI sHIVAM');
});