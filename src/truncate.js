angular.module('truncate',[]);
angular.module('truncate')
    .filter('characters', function() {
    return function(input, chars) {
        if(input && input.length >= chars)
        {
            input = input.substring(0, chars);

            var lastspace = input.lastIndexOf(' ');
            //get last space
            if (lastspace != -1) {
                input = input.substr(0, lastspace);
            }
            return input + '...';
        }
        return input;
    }
});