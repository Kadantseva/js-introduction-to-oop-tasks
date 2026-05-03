// BEGIN
const each = (collObjects, fnCallback) => {

        collObjects.forEach(function(objects) {
        fnCallback.call(objects);
  });

};

export default each;
// END
