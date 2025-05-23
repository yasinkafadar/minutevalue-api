/**
 * Converts a string to kebab-case
 * @param str String to convert
 * @returns Kebab-case string
 */
export const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

/**
 * Convert salary string to number
 * @param salaryStr Salary string like "£1,000" or "€50,000"
 * @returns Number value
 */
export const parseSalaryToNumber = (salaryStr: string): number => {
  if (!salaryStr) return 0;
  
  // Remove currency symbols and commas
  const cleanedStr = salaryStr.replace(/[£€$,]/g, '');
  
  // Parse as float
  const value = parseFloat(cleanedStr);
  return isNaN(value) ? 0 : value;
}; 