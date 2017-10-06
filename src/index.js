import 'anychart';
import labelsFormat from './format.js'

anychart.onDocumentReady(() => {
    let chart = anychart.column();
    let series = chart.column([3, 1, 2]);
    series.labels().enabled(true).format(labelsFormat);
    chart.container('container');
    chart.draw();
});
