const sliceFileName = (src) => {
  const splitted = src.split('/');
  return splitted[splitted.length - 1];
}

module.exports = {
  sliceFileName
}