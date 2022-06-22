// Modified function from this solution:
// https://gist.github.com/DLiblik/96801665f9b6c935f12c1071d37eae95

function isEqualAdvances(a, b) {
  const stack = [];

  // Numbers, strings, null, undefined, symbols, functions, booleans.
  // Also: objects (incl. arrays) that are actually the same instance
  if (a === b) {
    // Fast and done
    return true;
  }

  if (a === null || b === null) return false;

  const type1 = typeof a;

  // Ensure types match
  if (type1 !== typeof b) {
    return false;
  }

  // Special case for number: check for NaN on both sides
  // (only way they can still be equivalent but not equal)
  if (type1 === 'number') {
    // Failed initial equals test, but could still both be NaN
    return isNaN(a) && isNaN(b);
  }

  // Special case for function: check for toString() equivalence
  if (type1 === 'function') {
    // Failed initial equals test, but could still have equivalent
    // implementations - note, will match on functions that have same name
    // and are native code: `function abc() { [native code] }`
    return a.toString() === b.toString();
  }

  // For these types, cannot still be equal at this point, so fast-fail
  if (
    type1 === 'bigint' ||
    type1 === 'boolean' ||
    type1 === 'function' ||
    type1 === 'string' ||
    type1 === 'symbol'
  ) {
    return false;
  }

  // For dates, cast to number and ensure equal or both NaN (note, if same
  // exact instance then we're not here - that was checked above)
  if (a instanceof Date) {
    if (!(b instanceof Date)) {
      return false;
    }
    // Convert to number to compare
    const asNum1 = +a,
      asNum2 = +b;
    // Check if both invalid (NaN) or are same value
    return asNum1 === asNum2 || (isNaN(asNum1) && isNaN(asNum2));
  }

  // At this point, it's a reference type and could be circular, so
  // make sure we haven't been here before... note we only need to track a
  // since a being un-circular means b will either be equal (and not
  // circular too) or unequal whether circular or not.
  if (stack.includes(a)) {
    throw new Error(`isEqualAdvances a is circular`);
  }

  // breadcrumb
  stack.push(a);

  // Handle arrays
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    const length = a.length;

    if (length !== b.length) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (!isEqualAdvances(a[i], b[i], stack)) {
        return false;
      }
    }
    return true;
  }

  // Final case: object

  // get both key lists and check length
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);
  const numKeys = keys1.length;

  if (keys2.length !== numKeys) {
    return false;
  }

  // Empty object on both sides?
  if (numKeys === 0) {
    return true;
  }

  // sort is a native call so it's very fast - much faster than comparing the
  // values at each key if it can be avoided, so do the sort and then
  // ensure every key matches at every index
  keys1.sort();
  keys2.sort();

  // Ensure perfect match across all keys
  for (let i = 0; i < numKeys; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  // Ensure perfect match across all values
  for (let i = 0; i < numKeys; i++) {
    if (!isEqualAdvances(a[keys1[i]], b[keys1[i]], stack)) {
      return false;
    }
  }

  // back up
  stack.pop();

  // Walk the same, talk the same - matching ducks. Quack.
  // 🦆🦆
  return true;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
