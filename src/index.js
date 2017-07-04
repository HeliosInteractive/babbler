import domains from './domains';

const levenshtein = require('fast-levenshtein');

let domainsInternal = domains;
/**
 * Get a domains distance to the domains in our list
 * @param domain
 * @returns {Array}
 */
function getDistances(domain) {
  const distances = [];

  domainsInternal.some((d) => {
    const distance = levenshtein.get(domain, d);
    distances.push({
      domain: d,
      distance,
    });
    if (distance === 1) {
      return true;
    }
    return false;
  });
  return distances;
}
/**
 * Sort the distance by best match
 * @param a
 * @param b
 * @returns {number}
 */
function sortDistances(a, b) {
  return a.distance - b.distance;
}
/**
 * Check an email for mispellings in domains
 * @param email
 */
export const Check = function (email) {
  if (email.indexOf('@') === -1) {
    return false;
  }

  const split = email.split('@');
  const domain = split.pop();
  const matches = getDistances(domain).sort(sortDistances);

  if (matches[0].distance === 0) return true;

  const match = matches.shift();
  match.suggestion = `${split.shift()}@${match.domain}`;

  return match;
};
/**
 * Append, overwrite, or get the domains list
 * @param l
 * @param overwrite
 * @returns {[string]}
 */
export const Domains = function (l, overwrite) {
  if (!l) return domainsInternal;

  let list;
  if (!Array.isArray(l)) {
    list = [l];
  } else {
    list = l;
  }

  if (overwrite) {
    domainsInternal = list;
    return domainsInternal;
  }

  domainsInternal = domainsInternal
      .concat(list)
      .filter((v, i, a) => a.indexOf(v) === i);

  return domainsInternal;
};
