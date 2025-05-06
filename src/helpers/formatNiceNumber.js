function formatNiceNumber(num, options = { useSuffix: false }) {
  if (num < 100) return num.toString();

  const digits = Math.floor(Math.log10(num));
  const factor = Math.pow(10, digits - 1);
  const rounded = Math.round(num / factor) * factor;

  if (options.useSuffix) {
    if (rounded >= 1_000_000_000)
      return (rounded / 1_000_000_000).toFixed(0) + "B";
    if (rounded >= 1_000_000) return (rounded / 1_000_000).toFixed(0) + "M";
    if (rounded >= 1_000) return (rounded / 1_000).toFixed(0) + "K";
    return rounded.toString();
  }

  return rounded.toLocaleString("en-US");
}

export default formatNiceNumber;