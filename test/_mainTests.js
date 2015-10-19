var expect = require('expect.js');
var main = require('../index');

describe('this-npm-semver',function(){
  it('should return <package>-<version>',function(){
    return main.getPackageKey('./test/mockPackageSchema.json')
      .then((packageKey)=>{
        expect(packageKey).to.be('pretend-package-12.2.1-beta');
      });
  });
});
