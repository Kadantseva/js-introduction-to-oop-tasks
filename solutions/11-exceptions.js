export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (string) => {
  try {
      return JSON.parse(string);
    } catch (error) {
      throw new ParseError('Invalid JSON string');
  }
  
};
// END
