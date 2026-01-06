function readTimeCalculator(content) {
 const wordCount = content.trim().split(/\s+/).length;
 const minutes = wordCount / (100 * 0.3);
    return Math.round(minutes);

}

export {readTimeCalculator} ;