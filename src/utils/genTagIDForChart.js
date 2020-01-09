
const genTagIDForChart = (function() {
    let counter = 0;
    return function(prefix='chart-') {
        return (prefix ? prefix : '') + (++counter);
    };
})();

export {genTagIDForChart};