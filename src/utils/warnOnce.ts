const warned: {
  [message: string]: boolean;
} = {};

/**
 * Logs a warning message
 * but dont warn a same message twice
 */
export default function warnOnce(message: string) {
  if (!warned[message]) {
    console.warn(message);
    warned[message] = true;
  }
}
