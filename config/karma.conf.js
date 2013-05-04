basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/lib/angular/angular.min.js',
  'test/lib/angular/angular-mocks.js',
  'src/truncate.js',
   'test/unit/filtersSpec.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};